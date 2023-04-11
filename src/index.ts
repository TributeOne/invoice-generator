import { createInvoices } from "./createInvoices/createInvoices"
import { CALCULATION_OPERATIONS } from "./data/calculationOptions"
import { CUSTOMERS } from "./data/customers"
import { PRODUCTS } from "./data/products"

//This is my Actual Function

console.log(
      JSON.stringify(createInvoices(CALCULATION_OPERATIONS, CUSTOMERS, PRODUCTS), null, 10)
      //createInvoices(CALCULATION_OPERATIONS, CUSTOMERS, PRODUCTS)
)

//export {createInvoices}