import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Header from './MenuBar.tsx'
import Home from './pages/Home.tsx'
import PlannerInfo from './pages/overview/PlannerInfo.tsx';
import { useEffect } from "react";
import { useLocation } from "react-router";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import NotFound from "@/pages/NotFound.tsx";


export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="overview">
                <Route path='planner' element={<PlannerInfo/>} />
            </Route>
            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
