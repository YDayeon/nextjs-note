import { notFound } from 'next/navigation';

type TParams = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: TParams) {
  if (params.slug === 'nothing') notFound();
  return <h1>{params.slug} 제품 설명~</h1>;
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
