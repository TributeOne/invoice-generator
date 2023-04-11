import { Contact } from "../model/contact";

export const CONTACTS:Array<Contact> = [{
      id: '1',
      companyName: 'B&W',
      street: 'Wiesenstr.',
      streetNumber: '1',
      city: 'Bonn',
      postalCode: '53111',
      country: 'DE'
},
{
      id: '2',
      companyName: 'A&B',
      street: 'Betonstr.',
      streetNumber: '2',
      city: 'Bonn',
      postalCode: '53112',
      country: 'DE'
},
{
      id: '3',
      companyName: 'C&D',
      street: 'Plastikstr.',
      streetNumber: '3',
      city: 'Bonn',
      postalCode: '53113',
      country: 'DE'
}]

export const EXAMPLE_CUSTOMER_CONTACTS:Array<Contact> = [{
      id: '0',
      companyName: 'Example Customer GmbH (Headquarters)',
      street: 'max-mustermann-Str.',
      streetNumber: '1',
      city: 'Berlin',
      postalCode: '10115',
      country: 'DE'
}]