import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { PROJECTS } from '@/lib/data';
import styles from './ProjectDetail.module.css';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params;
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className="container">
          <Link href="/#projects" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Back to Projects
          </Link>
          
          <div className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.category}>{project.category}</span>
              <span>{project.emoji}</span>
            </div>
            <h1 className={`${styles.title} font-display`}>{project.title}</h1>
            
            <div className={styles.techList}>
              {project.tech.map((t) => (
                <span key={t} className={styles.techTag}>{t}</span>
              ))}
            </div>
          </div>

          {project.image && (
            <div className={styles.imageContainer}>
              <Image 
                src={project.image} 
                alt={`${project.title} preview`} 
                fill 
                className={styles.image} 
                priority
              />
            </div>
          )}

          <div className={styles.content}>
            <p>{project.content.trim()}</p>
          </div>

          <div className={styles.actions}>
            <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View Live Demo
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
            {project.github !== '#' && (
              <a href={project.github} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
