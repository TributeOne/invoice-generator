import { CALCULATION_OPERATIONS } from "../data/calculationOptions"
import { getCustomerNames } from "./getCustomerNames"

describe('Customer details function', () => {
    it('returns an array of every customer in the calculation operations', () => {
        const listOfCustomerNames = getCustomerNames(CALCULATION_OPERATIONS)
        expect(listOfCustomerNames).toEqual(['B&W', 'A&B', 'C&D'])
    })
    it('returns an array of every customer in the calculation operations', () => {
        const listOfCustomerNames = getCustomerNames([{
            customerName: 'TestDummy',
            createdAt: 1662732184000,
          },
          {
            customerName: 'TestDummy2',
            createdAt: 1662732184000,
          },])
        expect(listOfCustomerNames).not.toEqual(['B&W', 'A&B', 'C&D'])
        expect(listOfCustomerNames).toEqual(['TestDummy', 'TestDummy2'])
    })
    it('returns an empty array for an empty input', () => {
        const listOfCustomerNames = getCustomerNames([])
        expect(listOfCustomerNames).toEqual([])
    })

})