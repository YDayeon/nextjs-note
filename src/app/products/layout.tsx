import styles from './layout.module.css';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className={styles.header}>
        <a>female</a>
        <span>/</span>
        <a>male</a>
      </nav>
      {children}
    </section>
  );
}
