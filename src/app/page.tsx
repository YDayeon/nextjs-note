import Image from 'next/image';
import ProductsPage from './products/page';
import Counter from '@/components/Counter';

export default function Home() {
  return (
    <>
      <h1>This is the home page!!</h1>
      <Counter />
      <Image
        src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
        alt='shop'
        width={400}
        height={300}
      />
    </>
  );
}
