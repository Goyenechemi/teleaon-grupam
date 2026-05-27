import { useEffect, useRef } from "react";

// ─── Constants ────────────────────────────────────────────────
const NODE_COUNT = 500;
const PRIMARY_COLOR = "#4A4A4A";
const CONNECTION_DISTANCE = 90;

// ─── Node Class ───────────────────────────────────────────────
class FlowNode {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  radius: number = 0;
  baseRadius: number = 0;

  constructor(width: number, height: number) {
    this.init(width, height);
  }

  init(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.8;
    this.vy = (Math.random() - 0.5) * 0.8;
    this.baseRadius = Math.random() * 1.5 + 0.5;
    this.radius = this.baseRadius;
  }

  update(
    mouse: { x: number; y: number },
    isHovering: boolean,
    width: number,
    height: number
  ) {
    // Interactive gravity towards mouse
    if (isHovering) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 180) {
        const force = (180 - dist) / 180;
        this.vx += (dx / dist) * force * 0.08;
        this.vy += (dy / dist) * force * 0.08;
        this.radius = this.baseRadius + force * 1.5;
      } else {
        this.radius = this.baseRadius;
      }
    } else {
      this.radius = this.baseRadius;
    }

    // Friction
    this.vx *= 0.98;
    this.vy *= 0.98;

    this.x += this.vx;
    this.y += this.vy;

    // Bounce off edges
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    // Maintain minimum speed
    const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
    if (speed < 0.15) {
      this.vx += (Math.random() - 0.5) * 0.1;
      this.vy += (Math.random() - 0.5) * 0.1;
    } else if (speed > 2.5) {
      this.vx *= 0.9;
      this.vy *= 0.9;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = PRIMARY_COLOR;
    ctx.globalAlpha = 0.85;
    ctx.fill();
  }
}

// ─── Component ────────────────────────────────────────────────
/**
 * Neural Flow Visualizer: an animated canvas of particles connected
 * by lines that react to mouse proximity with gravity and brightness.
 */
export function FlowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d")!;
    let width = 0;
    let height = 0;
    let nodes: FlowNode[] = [];
    let mouse = { x: -1000, y: -1000 };
    let isHovering = false;
    let animFrameId: number;

    function resize() {
      width = canvas!.width = container!.offsetWidth;
      height = canvas!.height = container!.offsetHeight;
      nodes = Array.from({ length: NODE_COUNT }, () => new FlowNode(width, height));
    }

    function drawConnections() {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            const grad = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y
            );
            grad.addColorStop(0, "#4A4A4A");
            grad.addColorStop(1, "#A0A0A0");
            ctx.strokeStyle = grad;

            const baseOpacity = (1 - dist / CONNECTION_DISTANCE) * 0.4;

            const mouseDistI = Math.sqrt(
              Math.pow(mouse.x - nodes[i].x, 2) +
                Math.pow(mouse.y - nodes[i].y, 2)
            );
            const mouseDistJ = Math.sqrt(
              Math.pow(mouse.x - nodes[j].x, 2) +
                Math.pow(mouse.y - nodes[j].y, 2)
            );

            if (isHovering && (mouseDistI < 150 || mouseDistJ < 150)) {
              ctx.globalAlpha = Math.min(1, baseOpacity * 2.5);
              ctx.lineWidth = 1.8;
            } else {
              ctx.globalAlpha = baseOpacity;
              ctx.lineWidth = 1.0;
            }

            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawConnections();
      nodes.forEach((n) => {
        n.update(mouse, isHovering, width, height);
        n.draw(ctx);
      });
      animFrameId = requestAnimationFrame(animate);
    }

    // ── Event Listeners ──
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onMouseEnter = () => (isHovering = true);
    const onMouseLeave = () => {
      isHovering = false;
      mouse = { x: -1000, y: -1000 };
    };

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseenter", onMouseEnter);
    container.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    resize();
    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseenter", onMouseEnter);
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="visualizer-container"
      className="absolute inset-0 z-0 opacity-60 pointer-events-auto"
    >
      <canvas
        ref={canvasRef}
        id="flowCanvas"
        className="w-full h-full block cursor-crosshair transition-opacity duration-1000"
      />
    </div>
  );
}
