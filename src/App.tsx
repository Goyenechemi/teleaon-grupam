import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { useMouseGlow } from "@/hooks/useMouseGlow";

import { MouseGlow } from "@/components/common/MouseGlow";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { SolutionsPage } from "@/pages/SolutionsPage";
import { AboutPage } from "@/pages/AboutPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { ArticlePage } from "@/pages/ArticlePage";
import { BookingConfirmationPage } from "@/pages/BookingConfirmationPage";

/**
 * App
 *
 * Root component that:
 * - Sets up HelmetProvider for SEO
 * - Sets up BrowserRouter with routes: /, /solutions, /about, /insights
 * - Activates the global mouse glow effect
 * - Renders the persistent shell: MouseGlow → TopNavBar → <page> → Footer
 */
function App() {
  useMouseGlow();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container relative">
          {/* Mouse glow overlay */}
          <MouseGlow />

          {/* Persistent navigation */}
          <TopNavBar />

          {/* Page router */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:articleId" element={<ArticlePage />} />
            <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
          </Routes>

          {/* Persistent footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
