import { html, render } from './offscreenCanvas';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = html;

render();
