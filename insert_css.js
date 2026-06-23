const fs = require('fs');

const cssToInsert = `
/* ─── Solution Card System ─────────────────────────────────── */
@keyframes sc-enter {
  from {
    opacity: 0;
    transform: translateY(24px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes sc-glow-drift {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-12px, 8px) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
}

/* ── Card ───────────────────────────────────────────────────── */
.sc {
  --i: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 36px 32px 28px;
  
  /* Glassmorphism Bubble Effect */
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  
  /* Modern Squircle Shape (Static to prevent GPU lag with backdrop-filter) */
  border-radius: 48px 32px 48px 32px;
  overflow: hidden;
  cursor: default;

  opacity: 0;
  animation: sc-enter 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: calc(var(--i) * 80ms);

  border: 1px solid rgba(255, 255, 255, 0.6);
  
  /* Specular light inset + ambient shadow */
  box-shadow:
    inset 4px 4px 12px rgba(255, 255, 255, 0.9),
    inset -4px -4px 12px rgba(212, 195, 193, 0.15),
    0 10px 30px rgba(50, 23, 22, 0.04);

  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.6s ease;
}

.sc:hover {
  transform: translateY(-8px) scale(1.02);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 100%);
  box-shadow:
    inset 4px 4px 16px rgba(255, 255, 255, 1),
    inset -4px -4px 16px rgba(212, 195, 193, 0.1),
    0 24px 64px rgba(50, 23, 22, 0.08),
    0 8px 32px rgba(50, 23, 22, 0.06);
}

/* ── Ambient glow blobs ─────────────────────────────────────── */
.sc__glow {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  pointer-events: none;
  filter: blur(50px);
  opacity: 0.4;
  transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease;
  top: calc(-30% + var(--i, 0) * 4%);
  right: calc(-15% + var(--i, 0) * 3%);
  background: radial-gradient(circle, #ffdad7, transparent 70%);
}

.sc__glow--secondary {
  top: auto;
  right: auto;
  bottom: calc(-25% - var(--i, 0) * 3%);
  left: calc(-10% - var(--i, 0) * 2%);
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, #cbe9d9, transparent 70%);
  opacity: 0.3;
}

.sc:hover .sc__glow {
  opacity: 0.65;
  animation: sc-glow-drift 6s ease-in-out infinite;
}

.sc:hover .sc__glow--secondary {
  opacity: 0.5;
  animation: sc-glow-drift 8s ease-in-out infinite reverse;
}

/* ── Icon ring ──────────────────────────────────────────────── */
.sc__icon-ring {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, rgba(255, 218, 215, 0.5), rgba(203, 233, 217, 0.35));
  margin-bottom: 24px;
  position: relative;
  z-index: 1;
  transition: background 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.sc:hover .sc__icon-ring {
  background: linear-gradient(145deg, #321716, #4a2c2a);
  box-shadow: 0 6px 24px rgba(50, 23, 22, 0.18);
  transform: scale(1.08);
}

.sc__icon {
  width: 26px;
  height: 26px;
  color: #321716;
  transition: color 0.4s ease;
}

.sc:hover .sc__icon {
  color: #ffffff;
}

/* ── Title ──────────────────────────────────────────────────── */
.sc__title {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: -0.02em;
  color: #321716;
  margin: 0 0 10px;
  position: relative;
  z-index: 1;
}

/* ── Description ────────────────────────────────────────────── */
.sc__desc {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 15px;
  line-height: 24px;
  color: #504443;
  margin: 0 0 20px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

/* ── Tags ───────────────────────────────────────────────────── */
.sc__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.sc__tag {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #5f5e5e;
  background: rgba(239, 237, 237, 0.6);
  padding: 5px 14px;
  border-radius: 20px;
  border: none;
  transition: background 0.3s ease, color 0.3s ease;
}

.sc:hover .sc__tag {
  background: rgba(255, 218, 215, 0.25);
  color: #504443;
}

/* ── Action area ────────────────────────────────────────────── */
.sc__action {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid rgba(212, 195, 193, 0.3);
  position: relative;
  z-index: 1;
}

/* ── CTA button (cards with video) ──────────────────────────── */
.sc__cta {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  text-align: left;
}

.sc__cta-dot {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #321716;
  flex-shrink: 0;
  transition: background 0.35s ease, box-shadow 0.35s ease, transform 0.35s ease;
}

.sc__cta:hover .sc__cta-dot {
  background: #4a2c2a;
  box-shadow: 0 4px 20px rgba(50, 23, 22, 0.25);
  transform: scale(1.1);
}

.sc__cta-play {
  width: 13px;
  height: 13px;
  color: #fff;
  fill: #fff;
  margin-left: 2px;
}

.sc__cta-label {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #321716;
  transition: color 0.3s ease;
}

.sc__cta:hover .sc__cta-label {
  color: #795553;
}

.sc__cta-arrow {
  width: 16px;
  height: 16px;
  color: #321716;
  margin-left: auto;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.sc__cta:hover .sc__cta-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* ── Coming soon ────────────────────────────────────────────── */
.sc__soon {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;
  opacity: 0.4;
  cursor: default;
  user-select: none;
}

.sc__soon-icon {
  width: 15px;
  height: 15px;
  color: #5f5e5e;
}

.sc__soon-label {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #5f5e5e;
}
`;

const lines = fs.readFileSync('src/index.css', 'utf-8').split('\n');
lines.splice(15, 0, cssToInsert);
fs.writeFileSync('src/index.css', lines.join('\n'));
