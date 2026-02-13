import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes, Route, HashRouter } from "react-router";
import './index.css'
import Header from './MenuBar.tsx'
import Home from './pages/Home.tsx'
import PlannerInfo from './pages/overview/PlannerInfo.tsx';
import { useEffect } from "react";
import { useLocation } from "react-router";
import { ThemeProvider } from "@/components/theme-provider.tsx";


// Scroll to top on route change
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Render the app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="overview">
              <Route path="planner" element={<PlannerInfo />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
);