import IProduct from '@/interfaces/models/product'

export default class ProductsStorage {
  public static getItems() {
    const basket: IProduct[] = JSON.parse(
      localStorage.getItem('basket') ?? '[]'
    )

    return basket
  }

  public static addItem(product: IProduct) {
    const basket: IProduct[] = JSON.parse(
      localStorage.getItem('basket') ?? '[]'
    )
    const toStorage = JSON.stringify([...basket, product])
    localStorage.setItem('basket', toStorage)
  }

  public static removeItems() {
    localStorage.setItem('basket', JSON.stringify([]))
  }

  public static removeItem(id: number) {
    const basket: IProduct[] = JSON.parse(
      localStorage.getItem('basket') ?? '[]'
    )
    const toStorage = JSON.stringify(
      basket.filter((p: IProduct) => p.id !== id)
    )
    localStorage.setItem('basket', toStorage)
  }
}
