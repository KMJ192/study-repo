self.onmessage = (e) => {
  const result = e.data;
  self.postMessage(result);
};
