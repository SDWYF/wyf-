import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/global.css';

const rootElement = document.getElementById('root')!;
const appLoading = document.getElementById('app-loading');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

if (appLoading) {
  appLoading.style.opacity = '0';
  setTimeout(() => appLoading.remove(), 500);
}
