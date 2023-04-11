import { Contact } from "./contact";
import { Product } from "./product";

export interface Customer {
  id: number;
  companyName: string;
  contacts: Array<Contact>;
  taxPercentage: number;
  subscribedProductKeys?: Array<string>;
  contractStartDate?: number; //This Value needs to be set when the customer subscribed a tier. Othrwise it wont work!
  lastInvoiceDate?: number;
}