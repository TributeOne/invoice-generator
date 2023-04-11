import { Customer } from "../model/customer";
import { CONTACTS } from "./contacts";
import {
  PRODUCT_BASIC,
  PRODUCT_STANDARD,
  PRODUCT_PREMIUM,
  PRODUCT_PREMIUM_STANDARD_API_CALL,
  PRODUCT_STANDARD_STANDARD_API_CALL,
  PRODUCT_BASIC_STANDARD_API_CALL,
  PRODUCT_BASIC_MAINTENACE_AND_SUPPORT,
  PRODUCT_BASIC_REPORTING,
  PRODUCT_STANDARD_MAINTENACE_AND_SUPPORT,
  PRODUCT_STANDARD_REPORTING,
  PRODUCT_PREMIUM_REPORTING,
  PRODUCT_PREMIUM_MAINTENACE_AND_SUPPORT,
} from "./products";

export const CUSTOMERS: Array<Customer> = [
  {
    id: 1,
    companyName: "B&W",
    contacts: [CONTACTS[0]],
    taxPercentage: 19,
    subscribedProductKeys: [PRODUCT_BASIC.key, PRODUCT_BASIC_STANDARD_API_CALL.key, PRODUCT_BASIC_MAINTENACE_AND_SUPPORT.key, PRODUCT_BASIC_REPORTING.key],
    contractStartDate: 1662732184000,
    lastInvoiceDate: 1663057354000
  },
  {
    id: 2,
    companyName: "A&B",
    contacts: [CONTACTS[1]],
    taxPercentage: 19,
    subscribedProductKeys: [PRODUCT_STANDARD.key, PRODUCT_STANDARD_STANDARD_API_CALL.key, PRODUCT_STANDARD_MAINTENACE_AND_SUPPORT.key, PRODUCT_STANDARD_REPORTING.key],
    contractStartDate: 1662732184000
  },
  {
    id: 3,
    companyName: "C&D",
    contacts: [CONTACTS[2]],
    taxPercentage: 19,
    subscribedProductKeys: [PRODUCT_PREMIUM.key, PRODUCT_PREMIUM_STANDARD_API_CALL.key, PRODUCT_PREMIUM_MAINTENACE_AND_SUPPORT.key, PRODUCT_PREMIUM_REPORTING.key],
    contractStartDate: 1662732184000,
    lastInvoiceDate: 1663057354000
  },
];

export const EXAMPLE_CUSTOMERS: Array<Customer> = [
  {
    id: 0,
    companyName: "ExampleCustomerName",
    contacts: CONTACTS,
    taxPercentage: 19,
  },
];
