"use client";
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Web SEO - Desarrollo Web Profesional</title>
        <meta name="description" content="Sitio web profesional especializado en desarrollo con Next.js, SEO avanzado y soluciones tecnológicas innovadoras. Descubre contenido de calidad sobre programación." />
        <meta name="keywords" content="Next.js, SEO, desarrollo web, React, JavaScript, programación, tecnología" />
        <meta property="og:title" content="Inicio | Mi Web SEO - Desarrollo Web Profesional" />
        <meta property="og:description" content="Explora el contenido más reciente sobre tecnología, desarrollo web y SEO. Tu destino para aprender programación moderna." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://miwebseo.com/" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inicio | Mi Web SEO" />
        <meta name="twitter:description" content="Desarrollo web profesional con Next.js y SEO avanzado" />
        <link rel="canonical" href="https://miwebseo.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-white">
                Mi Web SEO
              </div>
              <div className="hidden md:flex space-x-8">
                <Link href="/" className="text-white hover:text-purple-300 transition-colors">
                  Inicio
                </Link>
                <Link href="/blog" className="text-white hover:text-purple-300 transition-colors">
                  Blog
                </Link>
                <Link href="/contacto" className="text-white hover:text-purple-300 transition-colors">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="pt-20">
          <div className="container mx-auto px-6 py-20">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Desarrollo Web
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {" "}Profesional
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Especialistas en Next.js, SEO avanzado y soluciones tecnológicas que impulsan tu presencia digital
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Link
                  href="/blog"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/25"
                >
                  Explorar Blog
                </Link>
                <Link
                  href="/contacto"
                  className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Contactar
                </Link>
              </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-8 mt-20"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">SEO Avanzado</h3>
                <p className="text-gray-300">Optimización completa para motores de búsqueda con técnicas modernas y resultados medibles.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Next.js Expert</h3>
                <p className="text-gray-300">Desarrollo de aplicaciones React modernas con Next.js, optimizadas para rendimiento y SEO.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Analytics Pro</h3>
                <p className="text-gray-300">Seguimiento avanzado de métricas y análisis de performance para optimizar resultados.</p>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center text-white/60">
              <p>&copy; 2024 Mi Web SEO. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}