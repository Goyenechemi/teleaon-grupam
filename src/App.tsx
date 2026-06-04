import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useMouseGlow } from "@/hooks/useMouseGlow";

import { MouseGlow } from "@/components/common/MouseGlow";
import { TopNavBar } from "@/components/layout/TopNavBar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { SolutionsPage } from "@/pages/SolutionsPage";
import { BookingConfirmationPage } from "@/pages/BookingConfirmationPage";

/**
 * App
 *
 * Root component that:
 * - Sets up BrowserRouter with two routes: / (Home) and /solutions
 * - Activates the global mouse glow effect
 * - Renders the persistent shell: MouseGlow → TopNavBar → <page> → Footer
 */
function App() {
  useMouseGlow();

  return (
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
          <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
        </Routes>

        {/* Persistent footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
