import { Product } from "../model/product"

/**
 * This function get the subscribed product names which the customer has subscribed. It searches for matching names in the products DB uns returns the deteils of the Product.
 */
export const getSubscribedProductData = (productKeysSubscribedTo: Array<string>, products: Array<Product>) => 
    productKeysSubscribedTo.map((productKey) => 
        products.find((product) => product.key === productKey))