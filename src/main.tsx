import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '@/App';
import Home from '@/routes/Home';
import About from '@/routes/About';
import './assets/css/style.css';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
