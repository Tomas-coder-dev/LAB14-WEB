import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Configuración optimizada de fuentes
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

// Metadata optimizada para SEO
export const metadata: Metadata = {
  title: {
    default: "Mi Web SEO - Desarrollo Web Profesional con Next.js",
    template: "%s | Mi Web SEO"
  },
  description: "Sitio web especializado en desarrollo con Next.js, SEO avanzado y soluciones tecnológicas innovadoras. Aprende programación moderna y mejores prácticas.",
  keywords: ["Next.js", "SEO", "desarrollo web", "React", "JavaScript", "programación", "tecnología", "web development"],
  openGraph: {
    title: "Mi Web SEO - Desarrollo Web Profesional",
    description: "Especialistas en Next.js, SEO y desarrollo web moderno",
    url: "https://miwebseo.com",
    siteName: "Mi Web SEO",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mi Web SEO - Desarrollo Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Web SEO - Desarrollo Web Profesional",
    description: "Especialistas en Next.js, SEO y desarrollo web moderno",
    creator: "@miwebseo",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-google",
    yandex: "tu-codigo-de-verificacion-yandex",
    yahoo: "tu-codigo-de-verificacion-yahoo",
  },
  applicationName: "Mi Web SEO",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Mi Web SEO Team" }],
  creator: "Mi Web SEO",
  publisher: "Mi Web SEO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "theme-color": "#8b5cf6",
    "color-scheme": "dark light",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preconnect para optimización de carga */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon optimizado */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Meta tags adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="color-scheme" content="dark light" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />

        {/* Preload de recursos críticos */}
        <link rel="preload" href="/hero-bg.webp" as="image" type="image/webp" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Mi Web SEO",
              "url": "https://miwebseo.com",
              "logo": "https://miwebseo.com/logo.png",
              "description": "Especialistas en desarrollo web con Next.js y SEO avanzado",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-234-567-8900",
                "contactType": "customer service",
                "availableLanguage": ["Spanish", "English"]
              },
              "sameAs": [
                "https://twitter.com/miwebseo",
                "https://linkedin.com/company/miwebseo",
                "https://github.com/miwebseo"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-900 text-white min-h-screen`}
        suppressHydrationWarning={true}
      >
        {/* Skip to main content para accesibilidad */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
        >
          Saltar al contenido principal
        </a>
        <div id="main" role="main">
          {children}
        </div>
        {/* Scripts de analytics (ejemplo) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics 4
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  );
}