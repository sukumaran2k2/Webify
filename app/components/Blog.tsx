'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/data';
import styles from './Blog.module.css';

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
                <h3 className={styles.title}>{post.title}</h3>
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

        <div className={styles.viewAllRow}>
          <Link href="/blog" className="btn btn-outline" id="blog-view-all">
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
