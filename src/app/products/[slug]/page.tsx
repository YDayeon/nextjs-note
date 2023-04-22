import { getProduct, getProducts } from '@/service/products';
import { notFound } from 'next/navigation';

type TParams = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: TParams) {
  return {
    title: `product name : ${params.slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: TParams) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return <h1>{product.name} 제품 설명~</h1>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
