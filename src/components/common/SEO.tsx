import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
}

export function SEO({ title, description, keywords, url }: SEOProps) {
  const fullTitle = `${title} | Automata Group`;
  const canonicalUrl = url ? `https://www.automatagroup.com${url}` : "https://www.automatagroup.com";

  // Structured Data / JSON-LD for LocalBusiness & Organization
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": "Automata Group",
    "url": "https://www.automatagroup.com",
    "logo": "https://www.automatagroup.com/og-image.jpg",
    "description": "Expertos en automatización de procesos empresariales y orquestación de agentes de inteligencia artificial.",
    "sameAs": [
      "https://www.linkedin.com/company/automatagroup"
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL to prevent duplicate content issues */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://www.automatagroup.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="https://www.automatagroup.com/og-image.jpg" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  );
}
