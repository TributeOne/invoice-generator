import { SupportedCurrencies } from "../type/supportedCurrencies";
import { UUID } from "../type/uuid";

export enum ProductType{
  TIER = 'TIER',
  FIXED = 'FIXED',
  ADDITIONAL_API_CALL = 'ADDITIONAL_API_CALL'
}

export interface Product {
  id: UUID
  key: string
  description: string
  price: number
  currency: SupportedCurrencies
  type: ProductType,
  apiCallsIncluded?: number
}