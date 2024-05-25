export const draw = (ctx: CanvasRenderingContext2D) => {
  let xPos = 10;

  return () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();

    ctx.arc(xPos, 100, 10, 0, Math.PI * 2, false);
    ctx.fill();

    xPos += 3;

    if (xPos > 1200) {
      xPos = 0;
    }
  };
};
