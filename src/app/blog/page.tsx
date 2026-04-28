"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag, Search } from "lucide-react";

const BlogPage = () => {
  const posts = [
    {
      id: 1,
      title: "Why Kalyani Nagar Remains Pune's Top Choice for Managed Offices",
      excerpt: "An in-depth look at the infrastructure and connectivity making Kalyani Nagar a corporate goldmine in 2026.",
      date: "April 24, 2026",
      readTime: "6 min read",
      category: "Market Trends",
      image: "/blog/kalyani-nagar.jpg" // Placeholder path
    },
    {
      id: 2,
      title: "The Rise of Industrial Warehousing in Chakan & Talegaon",
      excerpt: "How the expansion of manufacturing units is driving demand for specialized industrial sheds.",
      date: "April 18, 2026",
      readTime: "8 min read",
      category: "Industrial",
      image: "/blog/industrial.jpg"
    },
    {
      id: 3,
      title: "Co-working vs. Managed Office: Which is Right for Your Startup?",
      excerpt: "Comparing costs, scalability, and culture to help you make the right workspace decision.",
      date: "April 12, 2026",
      readTime: "5 min read",
      category: "Consulting",
      image: "/blog/coworking.jpg"
    }
  ];

  const featuredPost = posts[0];

  return (
    <main className="bg-background-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-20">
        
        {/* Header & Search */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Realty Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tightest uppercase">
              Market <span className="text-accent-orange">Intelligence</span>.
            </h1>
          </motion.div>

          <div className="relative group w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-secondary group-focus-within:text-accent-orange transition-colors" />
            <input 
              type="text" 
              placeholder="Search insights..." 
              className="w-full bg-background-secondary border border-white/10 rounded-full py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-accent-orange transition-all"
            />
          </div>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group mb-24 cursor-pointer"
        >
          <Link href={`/blog/${featuredPost.id}`}>
            <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-background-primary/40 to-transparent z-10" />
              <Image 
                src="/logo.avif" 
                alt={featuredPost.title} 
                fill 
                className="object-contain p-24 opacity-20 grayscale group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent-orange text-white text-[10px] font-black uppercase px-3 py-1 rounded-md tracking-widest">
                    Featured
                  </span>
                  <div className="flex items-center gap-2 text-white/60 text-xs font-medium">
                    <Calendar className="w-3 h-3" /> {featuredPost.date}
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-4 text-accent-orange font-bold uppercase text-[10px] tracking-widest">
                  Read Full Insight <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/5 pb-8">
          {["All Posts", "Market Trends", "Industrial", "Commercial", "Office Design", "Legal & RERA"].map((cat) => (
            <button key={cat} className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-accent-orange hover:text-accent-orange transition-all">
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.slice(1).map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <Link href={`/blog/${post.id}`} className="flex flex-col h-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 mb-6">
                   <Image 
                    src="/logo.avif" 
                    alt={post.title} 
                    fill 
                    className="object-contain p-12 opacity-10 grayscale group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-background-secondary/80 backdrop-blur-md text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded-lg border border-white/10 tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-3 text-white/40 text-[10px] font-bold uppercase tracking-tighter">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-4 group-hover:text-accent-orange transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-foreground-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-accent-orange transition-colors">Read Article</span>
                  <ArrowRight className="w-4 h-4 text-accent-orange -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <section className="mt-32 p-12 md:p-20 rounded-[40px] bg-background-secondary border border-white/5 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">Stay Ahead of the Market</h2>
              <p className="text-foreground-secondary text-sm">Join 500+ Pune business leaders receiving our monthly real estate analysis.</p>
            </div>
            <form className="flex w-full lg:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow lg:w-80 bg-background-primary border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-accent-orange" 
              />
              <button className="bg-accent-orange text-white px-8 py-4 rounded-2xl font-bold hover:brightness-110 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 blur-[80px] -z-0 rounded-full" />
        </section>

      </div>
    </main>
  );
};

export default BlogPage;