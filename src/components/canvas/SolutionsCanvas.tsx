import { useEffect, useRef } from "react";

/**
 * SolutionsCanvas
 * 
 * A high-end, interactive HTML5 Canvas background.
 * Renders an architectural grid of nodes that reacts to mouse movement 
 * with fluid spring physics. Glowing "data pulses" travel along the grid 
 * lines to represent automated flows and structural precision.
 */
export function SolutionsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
    }

    let nodes: Node[] = [];
    let gridCols = 0;
    let gridRows = 0;
    const spacing = 70; // Grid density

    const initGrid = () => {
      nodes = [];
      gridCols = Math.ceil(width / spacing) + 3;
      gridRows = Math.ceil(height / spacing) + 3;

      for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
          nodes.push({
            baseX: (i - 1) * spacing,
            baseY: (j - 1) * spacing,
            x: (i - 1) * spacing,
            y: (j - 1) * spacing,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      initGrid();
    };

    // Flow pulses
    interface Pulse {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
    }
    const pulses: Pulse[] = [];

    const spawnPulse = () => {
      // 5% chance per frame to spawn a pulse
      if (Math.random() > 0.05) return;
      const isHorizontal = Math.random() > 0.5;
      const dir = Math.random() > 0.5 ? 1 : -1;
      
      const p: Pulse = {
        x: isHorizontal ? (dir === 1 ? -50 : width + 50) : Math.random() * width,
        y: isHorizontal ? Math.random() * height : (dir === 1 ? -50 : height + 50),
        vx: isHorizontal ? dir * (Math.random() * 2 + 3) : 0,
        vy: isHorizontal ? 0 : dir * (Math.random() * 2 + 3),
        life: 0,
        maxLife: Math.random() * 250 + 150,
      };
      
      // Snap strictly to grid lines
      if (isHorizontal) {
        p.y = Math.round(p.y / spacing) * spacing;
      } else {
        p.x = Math.round(p.x / spacing) * spacing;
      }
      pulses.push(p);
    };

    const render = () => {
      // Background base (surface-container-lowest)
      ctx.fillStyle = "#fbf9f9";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse follow (easing)
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Update node physics
      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        // Repulsion from mouse
        const maxDist = 250;
        if (dist < maxDist) {
          const force = Math.pow((maxDist - dist) / maxDist, 2);
          node.vx -= (dx / dist) * force * 1.5;
          node.vy -= (dy / dist) * force * 1.5;
        }

        // Spring back to base
        node.vx += (node.baseX - node.x) * 0.04;
        node.vy += (node.baseY - node.y) * 0.04;

        // Friction
        node.vx *= 0.75;
        node.vy *= 0.75;

        node.x += node.vx;
        node.y += node.vy;
      }

      // Draw grid lines
      ctx.strokeStyle = "rgba(134, 163, 148, 0.18)"; // subtle on-tertiary-container
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      for (let i = 0; i < gridCols; i++) {
        for (let j = 0; j < gridRows; j++) {
          const index = i * gridRows + j;
          const n = nodes[index];
          
          if (i < gridCols - 1) {
            const right = nodes[(i + 1) * gridRows + j];
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(right.x, right.y);
          }
          if (j < gridRows - 1) {
            const down = nodes[i * gridRows + (j + 1)];
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(down.x, down.y);
          }
        }
      }
      ctx.stroke();

      // Draw mouse connection aura
      for (const node of nodes) {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(50, 23, 22, ${0.4 * (1 - dist / 180)})`; // primary color
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(node.x, node.y);
          ctx.stroke();
        }
      }

      // Draw nodes
      ctx.fillStyle = "rgba(50, 23, 22, 0.3)"; 
      for (const node of nodes) {
        ctx.fillRect(node.x - 1.5, node.y - 1.5, 3, 3);
      }

      // Update and draw flowing pulses
      spawnPulse();
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife || p.x < -200 || p.x > width + 200 || p.y < -200 || p.y > height + 200) {
          pulses.splice(i, 1);
          continue;
        }

        // Fade in and out
        const alpha = Math.min(1, p.life / 20) * Math.min(1, (p.maxLife - p.life) / 20);
        ctx.beginPath();
        const length = 50;
        const tailX = p.x - (p.vx === 0 ? 0 : Math.sign(p.vx) * length);
        const tailY = p.y - (p.vy === 0 ? 0 : Math.sign(p.vy) * length);
        
        // Gradient trail
        const gradient = ctx.createLinearGradient(tailX, tailY, p.x, p.y);
        gradient.addColorStop(0, "rgba(50, 23, 22, 0)");
        gradient.addColorStop(1, `rgba(50, 23, 22, ${alpha * 0.9})`);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.lineCap = "round";
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        
        // Glowing head
        ctx.fillStyle = `rgba(50, 23, 22, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize);
    resize();
    render();

    // Attach mouse listeners to window for smooth global tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
