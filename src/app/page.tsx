import Image from 'next/image';
import { Inter } from 'next/font/google';
import ProductsPage from './products/page';
import Counter from '@/components/Counter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Counter />
    </>
  );
}
