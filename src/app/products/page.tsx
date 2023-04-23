import Link from 'next/link';
import styles from './layout.module.css';
import { getProducts } from '@/service/products';
import MeowArticle from '@/components/MeowArticle';
import clothesImage from '../../../public/images/clothes.jpg';
import Image from 'next/image';

// export const revalidate = 3;

export default async function ProductsPage(): Promise<any> {
  const products = await getProducts();

  return (
    <>
      <section className={styles.container}>
        <h1>Product Introduction</h1>
        <Image src={clothesImage} alt='Clothes' />
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
