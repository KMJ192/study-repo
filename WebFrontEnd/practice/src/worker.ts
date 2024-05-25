import { draw } from './draw';
import FPS from './fps';

const fps = new FPS();
fps.init();

const worker = self;

worker.onmessage = (e) => {
  const { canvas } = e.data;
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

  fps.execute(draw(ctx), 60);
};
