'use client';

import { useEffect } from 'react';

function IsomorphicPage() {
  useEffect(() => {
    const worker = new Worker(new URL('./worker.js', import.meta.url));
    worker.postMessage(1000);
    worker.onmessage = (e) => {
      console.log(e.data);
    };
  }, []);

  return <div></div>;
}

export default IsomorphicPage;
