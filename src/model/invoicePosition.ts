import { UUID } from "../type/uuid";
import {Product} from "./product"

export interface InvoicePosition {
  productKey: string
  position: number
  description: string
  price: number
  amount: number
}