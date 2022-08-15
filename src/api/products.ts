import IProduct from '@/interfaces/models/product'
import data from './data'

export async function getAll(): Promise<IProduct[]> {
  const p = new Promise<IProduct[]>(resolve =>
    setTimeout(() => {
      resolve(data)
    }, Math.random() * 1000)
  )

  const products: IProduct[] = await p
  return products
}
