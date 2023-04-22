import path from 'path';
import { promises as fs } from 'fs';

export type TProduct = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<TProduct[]> {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<TProduct | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
