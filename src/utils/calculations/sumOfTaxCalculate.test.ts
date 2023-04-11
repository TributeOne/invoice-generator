import { sumOfTaxCalculate } from "./sumOfTaxCalculate"


describe('returns totalNet, grossPrice and totalGross', () => {
    it('returns totalNet, grossAmount and totalGross', () =>{
        const invoicePositions = ([
            {
              productKey: 'Basic',
              position: 1,
              description: 'Basic Product',
              price: 80,
              amount: 1
            },
            {
              productKey: 'BasicStandard',
              position: 2,
              description: 'Basic Product (+€0,09 each additional calculation) Included',
              price: 0,
              amount: 15
            },
            {
              productKey: 'BasicStandard',
              position: 3,
              description: 'Basic Product (+€0,09 each additional calculation)',
              price: 0.09,
              amount: 10
            },
            {
              productKey: 'BasicMaintenanceAndSupport',
              position: 4,
              description: 'Basic Product maintenance and support (e-mail)',
              price: 0,
              amount: 1
            },
            {
              productKey: 'BasicReporting',
              position: 5,
              description: 'Basic Product Reporting (n/a)',
              price: 0,
              amount: 1
            }
          ])
        const sumOfTaxes = sumOfTaxCalculate(invoicePositions, 19)
        expect(sumOfTaxes).toEqual({ totalNet: 80.9, tax: 15.37, totalGross: 96.27 })
    })
})