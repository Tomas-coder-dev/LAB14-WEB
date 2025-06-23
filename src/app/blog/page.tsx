import Head from 'next/head';
import Link from 'next/link';

const posts = [
  {
    slug: 'mejores-practicas-nextjs',
    title: 'Mejores prácticas con Next.js',
    excerpt: 'Descubre cómo optimizar tus proyectos con Next.js para SEO, rendimiento y mantenibilidad.',
    date: '2025-06-10'
  },
  {
    slug: 'seo-tecnico-modern',
    title: 'SEO técnico moderno para desarrolladores',
    excerpt: 'Aprende las claves del SEO técnico aplicadas a sitios web modernos y frameworks como Next.js.',
    date: '2025-05-28'
  },
  {
    slug: 'deploy-rapido-vercel',
    title: 'Deploy rápido a Vercel',
    excerpt: 'Guía paso a paso para desplegar tu web en Vercel y aprovechar al máximo el ecosistema serverless.',
    date: '2025-05-15'
  }
];

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Mi Web SEO</title>
        <meta name="description" content="Lee nuestros artículos más recientes de tecnología y programación." />
        <meta property="og:title" content="Blog | Mi Web SEO" />
        <meta property="og:description" content="Artículos sobre Next.js, SEO y desarrollo web avanzado." />
        <link rel="canonical" href="https://miwebseo.com/blog" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-10 text-center">
            Blog
          </h1>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <h2 className="text-2xl font-semibold text-purple-300 mb-2">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}