import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext.tsx';
import { AsideProvider } from './contexts/asideContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AsideProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AsideProvider>
    </ThemeProvider>
  </StrictMode>,
);
