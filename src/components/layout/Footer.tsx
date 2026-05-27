import { useTranslation } from "react-i18next";

const FOOTER_LINKS = [
  { key: "terms", href: "#" },
  { key: "privacy", href: "#" },
  { key: "cookies", href: "#" },
  { key: "accessibility", href: "#" },
];

/**
 * Footer
 * Full-width footer with copyright notice (left) and legal links (right).
 * Stacks vertically on mobile.
 */
export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-stack-md bg-background border-t border-outline-variant flex flex-col md:flex-row justify-between items-center px-margin-desktop max-w-container-max mx-auto gap-stack-sm relative z-10">
      {/* Copyright */}
      <div className="font-label-sm text-label-sm text-primary reveal">
        © 2024 AUTOMATA ARCHITECTURAL SYSTEMS. ALL RIGHTS RESERVED.
      </div>

      {/* Legal links */}
      <div className="flex gap-4 reveal" style={{ transitionDelay: "0.1s" }}>
        {FOOTER_LINKS.map(({ key, href }) => (
          <a
            key={key}
            href={href}
            className="nav-link font-label-sm text-label-sm text-secondary hover:text-primary transition-colors duration-200 opacity-80 hover:opacity-100"
          >
            {t(`footer.${key}`)}
          </a>
        ))}
      </div>
    </footer>
  );
}
