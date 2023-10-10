import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '~/App';
import Home from '~/routes/Home';
import { SWRConfig } from 'swr';
import '~/assets/css/style.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <SWRConfig value={{ revalidateOnReconnect: true, errorRetryCount: 2 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  </StrictMode>,
);
