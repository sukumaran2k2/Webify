import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/data';
import styles from './BlogIndex.module.css';

export const metadata = {
  title: 'Blog | Vibecods',
  description: 'Insights, tutorials, and thoughts on vibe coding, artificial intelligence, and the modern web development ecosystem.',
};

export default function BlogIndex() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Home
          </Link>

          <div className={styles.header}>
            <div className="section-tag">📝 All Articles</div>
            <h1 className={`${styles.title} font-display`}>
              The <span className="text-gradient">Vibecods</span> Blog
            </h1>
            <p className={styles.subtitle}>
              Insights, tutorials, and thoughts on vibe coding, artificial intelligence, and the modern web development ecosystem.
            </p>
          </div>

          <div className={styles.blogGrid}>
            {BLOG_POSTS.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className={styles.blogCard} aria-label={`Read post: ${post.title}`}>
                <div className={styles.imageWrapper}>
                  <Image src={post.image} alt="" fill className={styles.blogImg} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.meta}>
                    <span>{post.date}</span>
                    <span className={styles.metaDot} aria-hidden="true" />
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <div className={styles.tags}>
                    {post.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
