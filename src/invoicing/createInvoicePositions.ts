import { Customer } from "../model/customer";
import { InvoicePosition } from "../model/invoicePosition";
import { Product, ProductType } from "../model/product";
import { getUsedCalculationsAmount } from "../utils/calculations/getUsedCalculationsAmount";
import { getSubscribedProductData } from "../utils/getSubscribedProductData";

/**
 * Returns the actual Positions for the Invoice
 */
export const createInvoicePositions = (products: Array<Product>, customer: Customer, calculationOperationsAmount: number): Array<InvoicePosition> => {

    if (!customer.subscribedProductKeys) {
        throw new Error(`The Customer has no Product Subscribed`)
    }

    const subscribedProductsData = getSubscribedProductData(customer.subscribedProductKeys , products)
    if (!subscribedProductsData) {
        throw new Error(`The Customer has no Product Subscribed`)
    }

    const invoicePositions: Array<InvoicePosition> = []
    let postion: number = 0

    subscribedProductsData.map((productData) => {

        postion = postion + 1
        if (!productData) {
            throw new Error(`No product Data recieved`)
        }
        
        switch(productData.type) {
            case ProductType.ADDITIONAL_API_CALL:
                //Create Invoice Positions with Calculated used Amount
                const usedCalculations = getUsedCalculationsAmount(calculationOperationsAmount, productData.apiCallsIncluded!)
                invoicePositions.push({
                    productKey: productData.key,
                    position: postion,
                    description: productData.description + ' Included',
                    price: 0,
                    amount: usedCalculations.additionalAmount!
                })
                
                postion = postion + 1
                
                invoicePositions.push({
                    productKey: productData.key,
                    position: postion,
                    description: productData.description,
                    price: productData.price,
                    amount: usedCalculations.includedAmount!
                })
                break
            case ProductType.FIXED:
                //Create simple Invoice Position here.
                invoicePositions.push({
                    productKey: productData.key,
                    position: postion,
                    description: productData.description,
                    price: productData.price,
                    amount: 1
                })
                break
            case ProductType.TIER:
                //Create simple Invoice Position here.
                invoicePositions.push({
                    productKey: productData.key,
                    position: postion,
                    description: productData.description,
                    price: productData.price,
                    amount: 1
                })
                break

            default: throw new Error('No valid Product type for: ' + JSON.stringify(productData))
        }
    })
    return invoicePositions
}