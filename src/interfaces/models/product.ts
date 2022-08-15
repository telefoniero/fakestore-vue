import { IStringObject } from '../helpers/stringObject'

export default interface IProduct extends IStringObject {
  id: number
  title: string
  price: number
  description: string
  category: string
  url: string
  discount?: number
  sale: string
}
