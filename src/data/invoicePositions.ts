import { InvoicePosition } from "../model/invoicePosition";
import { PRODUCT_BASIC , PRODUCT_STANDARD} from "./products";

export const INVOICE_POSITIONS: Array<InvoicePosition> = [{
  productKey: PRODUCT_BASIC.key,
  position: 1,
  description: PRODUCT_BASIC.description,
  price: PRODUCT_BASIC.price,
  amount: 1
}]

export const INVOICE_POSITIONS_TWO: Array<InvoicePosition> = [{
  productKey: PRODUCT_BASIC.key,
  position: 1,
  description: PRODUCT_BASIC.description,
  price: PRODUCT_BASIC.price,
  amount: 1
},{
  productKey: PRODUCT_STANDARD.key,
  position: 2,
  description: PRODUCT_STANDARD.description,
  price: PRODUCT_STANDARD.price,
  amount: 1
}]