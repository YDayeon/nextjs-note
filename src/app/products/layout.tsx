import Link from 'next/link';
import styles from './layout.module.css';

export const metadata = {
  title: 'The most coolest products site | Check all cool products',
  description: 'Check these cool items',
  icons: {
    icon: '/favicon.ico',
  },
};

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
