export const invoiceSnapshot = [
  {
    "customer": {
      "id": 1,
      "companyName": "B&W",
      "contacts": [
        {
          "id": "1",
          "companyName": "B&W",
          "street": "Wiesenstr.",
          "streetNumber": "1",
          "city": "Bonn",
          "postalCode": "53111",
          "country": "DE"
        }
      ],
      "taxPercentage": 19,
      "subscribedProductKeys": [
        "Basic",
        "BasicStandard",
        "BasicMaintenanceAndSupport",
        "BasicReporting"
      ],
      "contractStartDate": 1662732184000,
      "lastInvoiceDate": 1663057354000
    },
    "startDate": 1663057354000,
    "invoicePositions": [
      {
        "productKey": "Basic",
        "position": 1,
        "description": "Basic Product",
        "price": 50,
        "amount": 1
      },
      {
        "productKey": "BasicStandard",
        "position": 2,
        "description": "Basic Product (+€0,09 each additional api call) Included",
        "price": 0,
        "amount": 15
      },
      {
        "productKey": "BasicStandard",
        "position": 3,
        "description": "Basic Product (+€0,09 each additional api call)",
        "price": 0.1,
        "amount": 10
      },
      {
        "productKey": "BasicMaintenanceAndSupport",
        "position": 4,
        "description": "Basic Product maintenance and support (e-mail)",
        "price": 0,
        "amount": 1
      },
      {
        "productKey": "BasicReporting",
        "position": 5,
        "description": "Basic Product Reporting (n/a)",
        "price": 0,
        "amount": 1
      }
    ],
    "totalNet": 51,
    "tax": 9.69,
    "totalGross": 60.69
  },
  {
    "customer": {
      "id": 2,
      "companyName": "A&B",
      "contacts": [
        {
          "id": "2",
          "companyName": "A&B",
          "street": "Betonstr.",
          "streetNumber": "2",
          "city": "Bonn",
          "postalCode": "53112",
          "country": "DE"
        }
      ],
      "taxPercentage": 19,
      "subscribedProductKeys": [
        "Standard",
        "StandardStandard",
        "StandardMaintenanceAndSupport",
        "StandardReporting"
      ],
      "contractStartDate": 1662732184000
    },
    "startDate": 1662732184000,
    "invoicePositions": [
      {
        "productKey": "Standard",
        "position": 1,
        "description": "Standard Product",
        "price": 100,
        "amount": 1
      },
      {
        "productKey": "StandardStandard",
        "position": 2,
        "description": "Standard Product (+€0,06 each additional api call) Included",
        "price": 0,
        "amount": 0
      },
      {
        "productKey": "StandardStandard",
        "position": 3,
        "description": "Standard Product (+€0,06 each additional api call)",
        "price": 0.05,
        "amount": 25
      },
      {
        "productKey": "StandardMaintenanceAndSupport",
        "position": 4,
        "description": "Standard Product maintenance and support (e-mail)",
        "price": 0,
        "amount": 1
      },
      {
        "productKey": "StandardReporting",
        "position": 5,
        "description": "Standard Product Reporting (n/a)",
        "price": 0,
        "amount": 1
      }
    ],
    "totalNet": 101.25,
    "tax": 19.24,
    "totalGross": 120.49
  },
  {
    "customer": {
      "id": 3,
      "companyName": "C&D",
      "contacts": [
        {
          "id": "3",
          "companyName": "C&D",
          "street": "Plastikstr.",
          "streetNumber": "3",
          "city": "Bonn",
          "postalCode": "53113",
          "country": "DE"
        }
      ],
      "taxPercentage": 19,
      "subscribedProductKeys": [
        "Premium",
        "PremiumStandard",
        "PremiumMaintenanceAndSupport",
        "PremiumReporting"
      ],
      "contractStartDate": 1662732184000,
      "lastInvoiceDate": 1663057354000
    },
    "startDate": 1663057354000,
    "invoicePositions": [
      {
        "productKey": "Premium",
        "position": 1,
        "description": "Premium Product",
        "price": 300,
        "amount": 1
      },
      {
        "productKey": "PremiumStandard",
        "position": 2,
        "description": "Premium Product (+€0,04 each additional api call) Included",
        "price": 0,
        "amount": 0
      },
      {
        "productKey": "PremiumStandard",
        "position": 3,
        "description": "Premium Product (+€0,04 each additional api call)",
        "price": 0.04,
        "amount": 25
      },
      {
        "productKey": "PremiumMaintenanceAndSupport",
        "position": 4,
        "description": "Premium Product maintenance and support (e-mail)",
        "price": 0,
        "amount": 1
      },
      {
        "productKey": "PremiumReporting",
        "position": 5,
        "description": "Premium Product Reporting (n/a)",
        "price": 0,
        "amount": 1
      }
    ],
    "totalNet": 301,
    "tax": 57.19,
    "totalGross": 358.19
  }
]