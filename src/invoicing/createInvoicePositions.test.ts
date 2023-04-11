import { CUSTOMERS } from "../data/customers"
import { PRODUCTS } from "../data/products"
import { createInvoicePositions } from "./createInvoicePositions"


describe('Testing creation of Invoice Positions', () => {
    it('Create Invoice Positions successful', () => {
        const calculationsAmount = 25
        const customer = CUSTOMERS[0]
        const invoicePositions = createInvoicePositions(PRODUCTS, customer, calculationsAmount)
        expect(invoicePositions).toEqual([
  {
    productKey: 'Basic',
    position: 1,
    description: 'Basic Product',
    price: 50,
    amount: 1
  },
  {
    productKey: 'BasicStandard',
    position: 2,
    description: 'Basic Product (+€0,09 each additional api call) Included',
    price: 0,
    amount: 15
  },
  {
    productKey: 'BasicStandard',
    position: 3,
    description: 'Basic Product (+€0,09 each additional api call)',
    price: 0.1,
    amount: 10
  },
  {
    productKey: 'BasicMaintenanceAndSupport',
    position: 4,
    description: 'Basic Product maintenance and support (e-mail)',
    price: 0,
    amount: 1
  },
  {
    productKey: 'BasicReporting',
    position: 5,
    description: 'Basic Product Reporting (n/a)',
    price: 0,
    amount: 1
  }
])
    })
})
