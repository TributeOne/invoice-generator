import { Invoice } from "../model/invoice";
import { CUSTOMERS } from "./customers";
import { INVOICE_POSITIONS } from "./invoicePositions";

//First invoice, one position
export const INVOICES: Array<Invoice> = [{
  customer: CUSTOMERS[0],
  createdAt: 1662732184,

  startDate: 1662732184,
  endDate: 1662732184,

  invoicePositions: INVOICE_POSITIONS,

  totalNet: INVOICE_POSITIONS[0].amount,
  totalGross: INVOICE_POSITIONS[0].amount * 1.19,
}]

//Second invoice, two position
export const INVOICES_TWO: Array<Invoice> = [{
  customer: CUSTOMERS[0],
  createdAt: 1662732184,

  startDate: 1662732184,
  endDate: 1662732184,

  invoicePositions: INVOICE_POSITIONS,

  totalNet: INVOICE_POSITIONS[0].amount,
  totalGross: INVOICE_POSITIONS[0].amount * 1.19,
}]