/**
 * It compares the calculationOperationsAmount to SubscribedCalculationsIncluded and returns includedAmount and additionalAmount
 * TODO: Old name: calculationOperationsAmountCompareToSubscribedCalculationsIncluded
 */
export const getUsedCalculationsAmount = (calculationOperationsAmount: number, calculationsIncluded: number) => {
    let includedAmount: number
    let additionalAmount: number
    if (calculationOperationsAmount > calculationsIncluded) {
        //console.log(`The executed calculation operations amount by customer is with an amount of ${calculationOperationsAmount} HIGHER then the by customer subscribed inclued calculation amount with ${calculationsIncluded}`)
        includedAmount = calculationsIncluded
        additionalAmount =  calculationOperationsAmount - calculationsIncluded
    }
    else {
        //console.log(`The executed calculation operations amount by customer is with an amount of ${calculationOperationsAmount} LOWER OR EAQEL then the by customer subscribed inclued calculation amount with ${calculationsIncluded}`)
        includedAmount = calculationOperationsAmount
        additionalAmount = 0
    }
    const usedCalculations = {includedAmount: includedAmount, additionalAmount: additionalAmount}
    return usedCalculations
}