import { getUsedCalculationsAmount } from "./getUsedCalculationsAmount"


describe('This is needed to return the right position amount', () => {
    it('subtracts "executedCalculatons" from "incluedCalculations" when "executedCalculatons" is more than "incluedCalculations"', () => {
        const calculationOperationsAmount = [25, 10, 30]
        const calculationsIncluded = 25
        expect(getUsedCalculationsAmount(calculationOperationsAmount[0], calculationsIncluded)).toEqual(
            { includedAmount: 25, additionalAmount: 0 }
        )
        expect(getUsedCalculationsAmount(calculationOperationsAmount[1], calculationsIncluded)).toEqual(
            { includedAmount: 10, additionalAmount: 0 }
        )
        expect(getUsedCalculationsAmount(calculationOperationsAmount[2], calculationsIncluded)).toEqual(
            { includedAmount: 25, additionalAmount: 5 }
        )
    })
})