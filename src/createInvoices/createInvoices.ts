import { companyNamesFilter } from '../utils/companyNamesFilter'
import { getCustomerData } from '../utils/getCustomerData'
import { createInvoicePositions } from '../invoicing/createInvoicePositions'
import { CalculationOperation } from '../model/calculationOperation'
import { Customer } from '../model/customer'
import { Invoice } from '../model/invoice'
import { Product } from '../model/product'
import { getCustomerNames } from '../utils/getCustomerNames'
import { sumOfTaxCalculate } from '../utils/calculations/sumOfTaxCalculate'

/**
 * It creates invoices
 */
export const createInvoices = (
  calculationOperations: Array<CalculationOperation>,
  customers: Array<Customer>,
  products: Array<Product>,
) => {
  const customerNames = getCustomerNames(calculationOperations)
  const customerUsageData = companyNamesFilter(
    calculationOperations,
    customerNames,
  )
  const invoices: Array<Invoice> = []
  customerUsageData.map((singleCustomerUsageData) => {
    const customerData = getCustomerData(singleCustomerUsageData.customerName, customers)
    const invoicePositions = createInvoicePositions(
      products,
      customerData,
      singleCustomerUsageData.customerOperationsFilterByName.length,
    )
    const taxData = sumOfTaxCalculate(invoicePositions, customerData.taxPercentage)

    let startDate = 0
    let endDate = 0
    if (customerData.lastInvoiceDate) {
      startDate = customerData.lastInvoiceDate
      endDate = Date.now()
      //TODO: the customerData.lastInvoiceDate should be updated in the DB
    } else {
      startDate = customerData.contractStartDate!
      endDate = Date.now()
      //TODO: the customerData.lastInvoiceDate should be updated in the DB
    }

    invoices.push({
      customer: customerData,
      createdAt: Date.now(),
      startDate: startDate,
      endDate: endDate,
      invoicePositions: invoicePositions,
      totalNet: taxData.totalNet,
      tax: taxData.tax,
      totalGross: taxData.totalGross,
    })
  })
  return invoices
}
