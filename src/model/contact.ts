import { SupportedCountries } from "../type/supportedCountries";
import { UUID } from "../type/uuid";

export interface Contact {
  id: UUID
  companyName: string
  street: string
  streetNumber: string
  city: string
  postalCode: string
  country: SupportedCountries
}