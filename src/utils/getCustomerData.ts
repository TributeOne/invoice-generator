import { Customer } from "../model/customer"

/**
 * It searches for customer data by finding matching names.
 */
export const getCustomerData = (companyNameToSearch: string, customers: Array<Customer>) => {
    const customer = customers.find((customer) => customer.companyName === companyNameToSearch)
    if (!customer) {
        throw new Error(`No company found with the name: "${companyNameToSearch}"`)
    }
    return customer
}