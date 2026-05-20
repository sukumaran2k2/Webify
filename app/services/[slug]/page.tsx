import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { SERVICES } from '@/lib/data';
import styles from './ServiceDetail.module.css';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage(props: ServicePageProps) {
  const params = await props.params;
  const service = SERVICES.find((item) => item.id === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <Navbar />
      <section className={styles.hero}>
        <div className="container">
          <Link href="/#services" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Services
          </Link>

          <div className={styles.header}>
            <div className={styles.badge} style={{ color: service.color, borderColor: `${service.color}40`, background: `${service.color}18` }}>
              <span aria-hidden="true">{service.icon}</span>
              {service.title}
            </div>
            <h1 className={`${styles.title} font-display`}>{service.title}</h1>
            <p className={styles.subtitle}>{service.desc}</p>
            <div className={styles.features}>
              {service.features.map((feature) => (
                <span key={feature} className={styles.feature}>{feature}</span>
              ))}
            </div>

            <div className={styles.ctaGroup}>
              <a href="#contact" className="btn btn-primary">Book This Service</a>
              <a href="/#contact" className="btn btn-outline">Contact Sales</a>
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.content}>
              <h2>What You Get</h2>
              <p>{service.content.trim()}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
