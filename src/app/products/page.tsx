import Link from 'next/link';
import styles from './layout.module.css';
import { getProducts } from '@/service/products';

// export const revalidate = 3;

export default async function ProductsPage(): Promise<any> {
  const products = await getProducts();
  const res = await fetch('https://meowfacts.herokuapp.com', {
    next: { revalidate: 3 },
    //cache:"no-cache"
  });
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <section className={styles.container}>
        <h1>제품 설명!</h1>
        <ul>
          {products.map(({ id, name }, index) => (
            <li key={index}>
              <Link href={`/products/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <article className={styles.article}>{factText}</article>
      </section>
    </>
  );
}
