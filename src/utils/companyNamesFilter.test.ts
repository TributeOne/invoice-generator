import { CALCULATION_OPERATIONS } from "../data/calculationOptions"
import { companyNamesFilter } from "./companyNamesFilter"

describe('Filters by name functions', () => {
    it('Filters calculation operations by company names', () => {
        const calculationOperations = CALCULATION_OPERATIONS
        const customerNamesFromCalculationOperations = ['B&W', 'A&B', 'C&D']
        const filteredCalculationOperationsByCompanyNames = companyNamesFilter(calculationOperations, customerNamesFromCalculationOperations)
        expect(filteredCalculationOperationsByCompanyNames).toEqual([
            {
                customerName: 'B&W',
                customerOperationsFilterByName: [
                  { customerName: 'B&W', createdAt: 1664368940863 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1664368940863 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1663057354000 },
                  { customerName: 'B&W', createdAt: 1663057354000 },
                  { customerName: 'B&W', createdAt: 1663057354000 },
                  { customerName: 'B&W', createdAt: 1663057354000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1663057354000 },
                  { customerName: 'B&W', createdAt: 1662732184000 },
                  { customerName: 'B&W', createdAt: 1663057354000 },
                  { customerName: 'B&W', createdAt: 1662732184000 }
                ]
              },
              {
                customerName: 'A&B',
                customerOperationsFilterByName: [
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1663057354000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1663057354000 },
                { customerName: 'A&B', createdAt: 1663057354000 },
                { customerName: 'A&B', createdAt: 1663057354000 },
                { customerName: 'A&B', createdAt: 1663057354000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1663057354000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1662732184000 },
                { customerName: 'A&B', createdAt: 1663057354000 },
                { customerName: 'A&B', createdAt: 1662732184000 }
                ]
              },
              {
                customerName: 'C&D',
                customerOperationsFilterByName: [
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1664368940863 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1664368940863 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1663057354000 },
                { customerName: 'C&D', createdAt: 1663057354000 },
                { customerName: 'C&D', createdAt: 1663057354000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1663057354000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1662732184000 },
                { customerName: 'C&D', createdAt: 1663057354000 },
                { customerName: 'C&D', createdAt: 1663057354000 }
                ]
              }
        ])
    })
})
