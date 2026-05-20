import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { BLOG_POSTS } from "@/lib/data";
import styles from "./BlogDetail.module.css";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage(props: BlogPageProps) {
  const params = await props.params;
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const isMarketingBlog = post.variant === "marketing";
  const heroClassName = isMarketingBlog ? styles.heroAlt : styles.hero;
  const titleClassName = `${styles.title} font-display ${
    isMarketingBlog ? styles.titleAlt : ""
  }`;

  return (
    <main>
      <Navbar />
      <section className={heroClassName}>
        <div className="container">
          <Link href="/#blog" className={styles.backLink}>
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
            Back to Blog
          </Link>

          <div className={styles.header}>
            <div className={styles.tags}>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${styles.tag} ${isMarketingBlog ? styles.tagAlt : ""}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className={titleClassName}>{post.title}</h1>

            <div className={styles.meta}>
              <span>{post.date}</span>
              <span className={styles.metaDot} aria-hidden="true" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div
            className={
              isMarketingBlog ? styles.heroAltBody : styles.imageContainer
            }
          >
            <Image
              src={post.image}
              alt={`${post.title} hero image`}
              fill
              className={styles.image}
              priority
            />
          </div>

          <div className={isMarketingBlog ? styles.contentAlt : styles.content}>
            <p>{post.content.trim()}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
