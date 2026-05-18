'use client';

import Image from 'next/image';
import styles from './Blog.module.css';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Vibecods Story: From Friends to a Modern AI Agency',
    excerpt: 'How a group of developers and digital marketers came together with a single mission: delivering lightning-fast, modern products powered by cutting-edge AI standards.',
    date: 'May 15, 2026',
    readTime: '3 min read',
    tags: ['Our Story', 'Vibe Coding', 'AI Standards'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 2,
    title: 'Next.js 15: Optimizing for the Edge and Beyond',
    excerpt: 'A deep dive into the latest Next.js features, focusing on Edge rendering, enhanced routing, and how we use it to build lightning-fast experiences.',
    date: 'April 28, 2026',
    readTime: '7 min read',
    tags: ['Next.js', 'Performance', 'React'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
  {
    id: 3,
    title: 'Designing with Tailwind: From Chaos to Design Systems',
    excerpt: 'How we transitioned from scattered CSS files to a unified, scalable design system using Tailwind CSS and modern utility classes.',
    date: 'April 15, 2026',
    readTime: '4 min read',
    tags: ['UI/UX', 'Tailwind', 'Design'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    link: '#',
  },
];

export default function Blog() {
  return (
    <section className={`section ${styles.blogSection}`} id="blog" aria-label="Latest blog posts">
      <div className="container">
        <div className="section-header-center">
          <div className="section-tag">📝 Our Thoughts</div>
          <h2 className="section-title font-display">
            The <span className="text-gradient">Vibecods</span> Blog
          </h2>
          <p className="section-subtitle">
            Insights, tutorials, and thoughts on vibe coding, artificial intelligence, and the modern web development ecosystem.
          </p>
        </div>

        <div className={styles.blogGrid}>
          {BLOG_POSTS.map((post) => (
            <a key={post.id} href={post.link} className={styles.blogCard} aria-label={`Read post: ${post.title}`}>
              <div className={styles.imageWrapper}>
                <Image src={post.image} alt="" fill className={styles.blogImg} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span>{post.date}</span>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.tags}>
                  {post.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.viewAllRow}>
          <a href="#" className="btn btn-outline" id="blog-view-all">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
