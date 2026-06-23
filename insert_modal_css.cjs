const fs = require('fs');

const cssToInsert = `
/* ─── Solution Modal ────────────────────────────────────────── */
.solution-modal {
  margin: auto;
  padding: 0;
  width: 90vw;
  max-width: 900px;
  max-height: 90vh;
  background: transparent;
  border: none;
  border-radius: 24px;
  overflow: visible;
  outline: none;
}

.solution-modal::backdrop {
  background: rgba(18, 9, 9, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.solution-modal.modal-visible::backdrop {
  opacity: 1;
}

/* Base state for animation */
.solution-modal__panel {
  display: flex;
  flex-direction: column;
  background: #fffbfa;
  border: 1px solid rgba(212, 195, 193, 0.5);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(50, 23, 22, 0.2);
  
  /* Start small and clipped */
  transform: scale(0.95) translateY(20px);
  clip-path: inset(10% 10% 10% 10% round 24px);
  opacity: 0;
  transition: 
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    clip-path 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease;
}

.solution-modal.modal-visible .solution-modal__panel {
  transform: scale(1) translateY(0);
  clip-path: inset(0% 0% 0% 0% round 24px);
  opacity: 1;
}

.solution-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  background: rgba(255, 251, 250, 0.95);
  border-bottom: 1px solid rgba(212, 195, 193, 0.3);
  position: relative;
  z-index: 10;
}

.solution-modal__header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.solution-modal__icon-frame {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 218, 215, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 218, 215, 0.6);
}

.solution-modal__title {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #321716;
  margin: 0;
}

.solution-modal__close-btn {
  background: rgba(212, 195, 193, 0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #504443;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.solution-modal__close-btn:hover {
  background: rgba(186, 26, 26, 0.1);
  color: #ba1a1a;
}

.solution-modal__video-wrapper {
  width: 100%;
  background: #000;
  position: relative;
  /* Aspect ratio roughly 16:9 but capped */
  max-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.solution-modal__video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-height: 450px;
}

.solution-modal__body {
  padding: 32px;
  background: #fffbfa;
}

.solution-modal__description {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #504443;
  margin: 0 0 24px;
}

.solution-modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 32px;
}

.solution-modal__tag {
  font-family: "Hanken Grotesk", sans-serif;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  color: #5f5e5e;
  background: #f4efee;
  padding: 6px 12px;
  border-radius: 16px;
}

.solution-modal__cta-area {
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(212, 195, 193, 0.3);
  padding-top: 24px;
}

@media (max-width: 640px) {
  .solution-modal {
    width: 100vw;
    height: 100vh;
    max-width: none;
    max-height: none;
    border-radius: 0;
  }
  .solution-modal__panel {
    border-radius: 0;
    height: 100%;
    border: none;
    clip-path: none;
  }
}
`;

const lines = fs.readFileSync('src/index.css', 'utf-8').split('\n');
lines.push(cssToInsert);
fs.writeFileSync('src/index.css', lines.join('\n'));
