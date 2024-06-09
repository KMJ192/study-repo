import FPS from './fps';
import { draw } from './draw';
import { worker } from './workerConnector';

import './style.css';

export const html = `
  <div style="display: flex; flex-direction: column; row-gap: 12px; padding: 16px; box-sizing: border-box;">
    <button class="btn">block main thread</button>
    <canvas class="canvas" width="1200" height="200"></canvas>
    <canvas class="offscreen-canvas" width="1200" height="200"></canvas>
  </div>
`;

export const render = () => {
  const canvas: HTMLCanvasElement = document.querySelector('.canvas')!;
  const offCanvas: HTMLCanvasElement =
    document.querySelector('.offscreen-canvas')!;
  canvas.style.border = '1px solid black';
  offCanvas.style.border = '1px solid black';

  const mainThreadBlockBtn: HTMLButtonElement = document.querySelector('.btn')!;

  const fps = new FPS();
  const ctx = canvas.getContext('2d')!;
  fps.execute(draw(ctx), 60);

  const offscreen = offCanvas.transferControlToOffscreen();
  worker.postMessage({ canvas: offscreen }, [offscreen]);

  // 3초간 main thread를 blocking
  const blockThread = () => {
    const start = Date.now();
    while (Date.now() - start < 3000) {}
  };

  mainThreadBlockBtn.onclick = blockThread;
};
