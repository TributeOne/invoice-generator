import { CALCULATION_OPERATIONS } from "../data/calculationOptions";
import { CUSTOMERS } from "../data/customers";
import { PRODUCTS } from "../data/products";
import { createInvoices } from "./createInvoices";
import { invoiceSnapshot } from "./invoiceSnapshot"

describe('Creation of Invoice', () => {
    it('creates an invoice by providing calculation operations, customers and products', () =>{
        const invoicesCreated = createInvoices(CALCULATION_OPERATIONS, CUSTOMERS, PRODUCTS)
        const expectedInvoiceResult = invoiceSnapshot
        
        invoicesCreated.forEach((invoiceCreated, index) => {
          expect(invoicesCreated).toEqual(expect.arrayContaining(
            [expect.objectContaining(
              expectedInvoiceResult[index]
            )]
          ))
          expect(new Date(invoiceCreated.createdAt).toISOString().split('T')[0]).toBe(new Date().toISOString().split('T')[0])
          expect(new Date(invoiceCreated.endDate).toISOString().split('T')[0]).toBe(new Date().toISOString().split('T')[0])
        })
    })
})
 