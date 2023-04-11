import { CalculationOperation } from "../model/calculationOperation"

/**
 * It list me every existing customer name once found in calcumaltion operations
 */
export const getCustomerNames = (
    calculationOperations: Array<CalculationOperation>
  ) => {
    const customerNamesWithDublicates = calculationOperations.map(
      (calculationOperation) => calculationOperation.customerName
    )
    const customerNames = customerNamesWithDublicates.filter(
      (customerName, index) =>
        customerNamesWithDublicates.indexOf(customerName) === index
    )
    return customerNames
  }