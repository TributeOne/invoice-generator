import { PRODUCTS, PRODUCT_PREMIUM, PRODUCT_PREMIUM_STANDARD_API_CALL } from "../data/products"
import { getSubscribedProductData } from "./getSubscribedProductData"

describe('Searching product deteils function', () => {
    it('returns a list of Product Details by searching them by name.', () => {
        const subscribedProductKeysToSearch = [ 'Premium', 'PremiumStandard' ]
        const products = PRODUCTS
        const customerSubscribedProducts = getSubscribedProductData(subscribedProductKeysToSearch, products)
        expect(customerSubscribedProducts).toEqual([
            PRODUCT_PREMIUM,
            PRODUCT_PREMIUM_STANDARD_API_CALL
          ])
    })
})