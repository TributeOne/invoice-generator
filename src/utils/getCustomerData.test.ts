import { CUSTOMERS } from "../data/customers";
import { getCustomerData } from "./getCustomerData";

describe('Find customer names filter function', () => {
    it('searches for a matching name, inside the CUSTOMERS DB and retuns the customer details.', () => {
        const companyNameToSearch = 'B&W'
        const customers = CUSTOMERS
        const customerData = getCustomerData(companyNameToSearch, customers)
        expect(customerData).toEqual(
            CUSTOMERS[0]
        )
    })
})