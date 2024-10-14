import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/themeContext.tsx';
import { AsideCollapseProvider } from './contexts/asideCollapseContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AsideCollapseProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AsideCollapseProvider>
    </ThemeProvider>
  </StrictMode>,
);
