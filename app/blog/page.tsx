import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { BLOG_POSTS } from "@/lib/data";
import styles from "./BlogIndex.module.css";

const formatSlugTitle = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

const getCustomBlogPages = () => {
  const blogFolder = path.join(process.cwd(), "app", "blog");

  if (!fs.existsSync(blogFolder)) {
    return [];
  }

  const knownSlugs = new Set(BLOG_POSTS.map((post) => post.slug));

  const customBlogMetadata: Record<
    string,
    {
      title?: string;
      excerpt?: string;
      date?: string;
      readTime?: string;
      tags?: string[];
      image?: string;
    }
  > = {
    "best-vibe-coder-in-chennai": {
      title: "Best Vibe Coder in Chennai: Expert Development Services",
      excerpt:
        "Discover how Vibecods delivers premium Vibe Coding development services in Chennai with fast results, modern UX, and business-focused execution.",
      date: "May 2026",
      readTime: "4 min read",
      tags: ["Chennai", "Vibe Coding", "Development"],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    "blog-2": {
      title: "Chennai Vibe Coding Stories",
      excerpt:
        "Practical insights on building modern digital products in Chennai using Vibe Coding workflows.",
      date: "May 2026",
      readTime: "4 min read",
      tags: ["Chennai", "Vibe Stories", "Product"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=90",
    },
    blog4: {
      title: "blog 4Chennai Vibe Coding Stories",
      excerpt:
        "Practical insights on building modern digital products in Chennai using Vibe Coding workflows.",
      date: "May 2026",
      readTime: "4 min read",
      tags: ["Chennai", "Vibe Stories", "Product"],
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
  };

  return fs
    .readdirSync(blogFolder, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("["))
    .map((entry) => entry.name)
    .filter((slug) => {
      const pageFile = path.join(blogFolder, slug, "page.tsx");
      return fs.existsSync(pageFile) && !knownSlugs.has(slug);
    })
    .map((slug) => {
      const meta = customBlogMetadata[slug] ?? {};
      return {
        id: slug,
        slug,
        title: meta.title ?? formatSlugTitle(slug),
        excerpt: meta.excerpt ?? "A custom blog page with a bespoke layout.",
        date: meta.date ?? "May 2026",
        readTime: meta.readTime ?? "Custom",
        tags: meta.tags ?? ["Custom", "TSX"],
        image:
          meta.image ??
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
      };
    });
};

export const metadata = {
  title: "Blog | Vibecods",
  description:
    "Insights, tutorials, and thoughts on vibe coding, artificial intelligence, and the modern web development ecosystem.",
};

export default function BlogIndex() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.hero}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>

          <div className={styles.header}>
            <div className="section-tag">📝 All Articles</div>
            <h1 className={`${styles.title} font-display`}>
              The <span className="text-gradient">Vibecods</span> Blog
            </h1>
            <p className={styles.subtitle}>
              Insights, tutorials, and thoughts on vibe coding, artificial
              intelligence, and the modern web development ecosystem.
            </p>
          </div>

          <div className={styles.blogGrid}>
            {[...BLOG_POSTS, ...getCustomBlogPages()].map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={styles.blogCard}
                aria-label={`Read post: ${post.title}`}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className={styles.blogImg}
                  />
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
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
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
