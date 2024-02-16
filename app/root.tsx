import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import App from '~/App';
import Home from '~/routes/Home';
import { mantineTheme } from '~/utilities';
import '~/assets/css/style.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <SWRConfig value={{ revalidateOnReconnect: true, errorRetryCount: 2 }}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </SWRConfig>
  </StrictMode>,
);
