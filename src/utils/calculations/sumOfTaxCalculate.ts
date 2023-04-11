import { InvoicePosition } from "../../model/invoicePosition"
  
//TODO: this ist Classic rounding, could be wrong!

  /**
   * It calculates totalNet, grossPrice and totalGross withe the Tax percantage that is deposit in the customer data.
    Tax percent should variate depending on the customer.
   */
  export const sumOfTaxCalculate = (invoicePositions: Array<InvoicePosition>, taxPercentage: number) => {            
    const totalNetOfPositions = invoicePositions.map(
      (invoicePosition: Pick<InvoicePosition, "price" | "amount">) => 
        invoicePosition.price * invoicePosition.amount
    )
    let totalNet = 0
    totalNetOfPositions.forEach((totalOfPosition: number) => {
      totalNet += totalOfPosition
    })
    const tax = totalNet / 100 * taxPercentage
    const totalGross = totalNet + tax
    return {
      totalNet: parseFloat(totalNet.toFixed(2)), 
      tax: parseFloat(tax.toFixed(2)), 
      totalGross: parseFloat(totalGross.toFixed(2))
    }
}