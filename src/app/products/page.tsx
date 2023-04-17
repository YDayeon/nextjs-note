import Link from 'next/link';
import styles from './layout.module.css';

const products = ['skirt', 'pants', 'top', 'underwear'];

export default function ProductsPage() {
  return (
    <section className={styles.container}>
      <h1>제품 설명!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
