import {Customer} from "./customer"
import {Contact} from "./contact"
import {InvoicePosition} from "./invoicePosition"
import { UUID } from "../type/uuid"
import { SupportedCurrencies } from "../type/supportedCurrencies"

export interface Invoice {
  //id: UUID
  customer: Customer
  //invoiceNumber: number
  //senderAddress: Contact
  //receiverAddress: Contact
  createdAt: number
  //dueAt: number
  startDate: number
  endDate: number
  //desciption: string

  invoicePositions: Array<InvoicePosition>
  //taxPositionPercent: number
  //taxPositionCurrency: SupportedCurrencies

  totalNet?: number
  //totalNetCurrency: SupportedCurrencies
  tax?: number
  totalGross?: number
  //totalGrossCurrency: SupportedCurrencies
}