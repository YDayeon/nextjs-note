import Link from 'next/link';
import styles from './layout.module.css';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className={styles.header}>
        <Link href='/products/women'>female</Link>
        <span>/</span>
        <Link href='/products/men'>male</Link>
      </nav>
      {children}
    </section>
  );
}
