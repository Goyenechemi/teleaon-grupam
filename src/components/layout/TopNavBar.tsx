import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Nav link definitions ─────────────────────────────────────
const NAV_LINKS = [
  { key: "process", to: "/" },
  { key: "solutions", to: "/solutions" },
  { key: "about", to: "#" },
  { key: "insights", to: "#" },
];

/**
 * TopNavBar
 *
 * Sticky top navigation with:
 * - AUTOMATA wordmark linking to /
 * - Nav links using React Router <Link> (active state via useLocation)
 * - "Get Started" CTA scrolls to the diagnostic form on Home
 * - Mobile hamburger (visual placeholder)
 */
export function TopNavBar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const nextLng = i18n.language.startsWith("es") ? "en" : "es";
    i18n.changeLanguage(nextLng);
  };

  const handleGetStarted = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("diagnostic-form")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document
        .getElementById("diagnostic-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  return (
    <nav className="w-full h-20 bg-background/90 backdrop-blur-sm border-b border-outline-variant flex justify-between items-center px-margin-desktop max-w-container-max mx-auto z-50 sticky top-0 transition-all duration-300">
      {/* Wordmark */}
      <Link
        to="/"
        className="font-headline-md text-headline-md tracking-tighter text-primary transition-opacity active:opacity-70 no-underline"
      >
        AUTOMATA
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex gap-gutter items-center">
        {NAV_LINKS.map(({ key, to }) => {
          const active = isActive(to);
          const isExternal = to === "#";
          const label = t(`nav.${key}`);

          if (isExternal) {
            return (
              <a
                key={key}
                href={to}
                className={cn(
                  "nav-link font-body-md text-body-md hover:text-primary transition-colors duration-300",
                  active ? "active-nav text-primary font-bold" : "text-secondary"
                )}
              >
                {label}
              </a>
            );
          }

          return (
            <Link
              key={key}
              to={to}
              className={cn(
                "nav-link font-body-md text-body-md hover:text-primary transition-colors duration-300",
                active ? "active-nav text-primary font-bold" : "text-secondary"
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Actions (Toggle & CTA) */}
      <div className="hidden md:flex gap-4 items-center">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-secondary hover:text-primary transition-colors duration-300 font-label-sm"
          title="Cambiar idioma / Change language"
        >
          <Globe className="w-4 h-4" />
          <span className="uppercase tracking-widest">{i18n.language.startsWith("en") ? "EN" : "ES"}</span>
        </button>

        <Button
          variant="primary"
          size="sm"
          onClick={handleGetStarted}
        >
          {t("nav.getStarted")}
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-primary btn-interactive"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
