import { CalculationOperation } from "../model/calculationOperation";

/**
 * It filters the calculationOperations and sort them by companyNames
 */
export const companyNamesFilter = (
    calculationOperations: Array<CalculationOperation>,
    customerNames: Array<string>
    ) => {
    const customerUsageData = customerNames.map(
      (customerName) => {
        const customerOperationsFilterByName = calculationOperations.filter(
          (calculationOperation) => calculationOperation.customerName == customerName
        )
        return {customerName: customerName, customerOperationsFilterByName: customerOperationsFilterByName}
      }
    )
    return customerUsageData
  }