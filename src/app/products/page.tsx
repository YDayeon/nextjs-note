import Link from 'next/link';
import styles from './layout.module.css';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';

// export const revalidate = 3;

export default async function ProductsPage(): Promise<any> {
  const products = await getProducts();

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
        <MeowArticle />
      </section>
    </>
  );
}
