import { Product, ProductType } from "../model/product";

export const PRODUCT_BASIC: Product = {
  id: "1",
  key: "Basic",
  description: "Basic Product",
  price: 50,
  currency: "EURO",
  type: ProductType.TIER,
};

export const PRODUCT_STANDARD: Product = {
  id: "2",
  key: "Standard",
  description: "Standard Product",
  price: 100,
  currency: "EURO",
  type: ProductType.TIER,
};

export const PRODUCT_PREMIUM: Product = {
  id: "3",
  key: "Premium",
  description: "Premium Product",
  price: 300,
  currency: "EURO",
  type: ProductType.TIER,
};

export const PRODUCT_ELITE: Product = {
  id: "4",
  key: "Elite",
  description: "Elite Product",
  price: 600,
  currency: "EURO",
  type: ProductType.TIER,
};

export const PRODUCT_ULTIMATE: Product = {
  id: "5",
  key: "Ultimate",
  description: "Ultimate Product",
  price: 1500,
  currency: "EURO",
  type: ProductType.TIER,
};

//----------------------------- Standard Products

export const PRODUCT_BASIC_STANDARD_API_CALL: Product = {
  id: "6",
  key: "BasicStandard",
  description: "Basic Product (+€0,09 each additional api call)",
  price: 0.10,
  currency: "EURO",
  apiCallsIncluded: 10,
  type: ProductType.ADDITIONAL_API_CALL,
};

export const PRODUCT_STANDARD_STANDARD_API_CALL: Product = {
  id: "7",
  key: "StandardStandard",
  description: "Standard Product (+€0,06 each additional api call)",
  price: 0.05,
  currency: "EURO",
  apiCallsIncluded: 1000,
  type: ProductType.ADDITIONAL_API_CALL,
};

export const PRODUCT_PREMIUM_STANDARD_API_CALL: Product = {
  id: "8",
  key: "PremiumStandard",
  description: "Premium Product (+€0,04 each additional api call)",
  price: 0.04,
  currency: "EURO",
  apiCallsIncluded: 10000,
  type: ProductType.ADDITIONAL_API_CALL,
};

export const PRODUCT_ELITE_STANDARD_API_CALL: Product = {
  id: "9",
  key: "EliteStandard",
  description: "Elite Product (+€0,01 each additional api call)",
  price: 0.01,
  currency: "EURO",
  apiCallsIncluded: 100000,
  type: ProductType.ADDITIONAL_API_CALL,
};

export const PRODUCT_ULTIMATE_STANDARD_API_CALL: Product = {
  id: "10",
  key: "UltimateStandard",
  description: "Ultimate Product (+€0,03 each additional api call)",
  price: 0.02,
  currency: "EURO",
  apiCallsIncluded: 1000000,
  type: ProductType.ADDITIONAL_API_CALL,
};

//----------------------------- maintenance and support

export const PRODUCT_BASIC_MAINTENACE_AND_SUPPORT: Product = {
  id: "11",
  key: "BasicMaintenanceAndSupport",
  description: "Basic Product maintenance and support (e-mail)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_STANDARD_MAINTENACE_AND_SUPPORT: Product = {
  id: "12",
  key: "StandardMaintenanceAndSupport",
  description: "Standard Product maintenance and support (e-mail)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_PREMIUM_MAINTENACE_AND_SUPPORT: Product = {
  id: "13",
  key: "PremiumMaintenanceAndSupport",
  description: "Premium Product maintenance and support (e-mail)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_ELITE_MAINTENACE_AND_SUPPORT: Product = {
  id: "14",
  key: "EliteMaintenanceAndSupport",
  description: "Elite Product maintenance and support (personal)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_ULTIMATE_MAINTENACE_AND_SUPPORT: Product = {
  id: "15",
  key: "UltimateMaintenanceAndSupport",
  description: "Ultimate Product maintenance and support (personal)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

//----------------------------- Standard Products


export const PRODUCT_BASIC_REPORTING: Product = {
  id: "16",
  key: "BasicReporting",
  description: "Basic Product Reporting (n/a)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_STANDARD_REPORTING: Product = {
  id: "17",
  key: "StandardReporting",
  description: "Standard Product Reporting (n/a)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_PREMIUM_REPORTING: Product = {
  id: "18",
  key: "PremiumReporting",
  description: "Premium Product Reporting (n/a)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_ELITE_REPORTING: Product = {
  id: "19",
  key: "EliteReporting",
  description: "Elite Product Reporting (standard)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};

export const PRODUCT_ULTIMATE_REPORTING: Product = {
  id: "20",
  key: "UltimateReporting",
  description: "Ultimate Product Reporting (customized)",
  price: 0,
  currency: "EURO",
  type: ProductType.FIXED,
};


export const PRODUCTS: Array<Product> = [
  PRODUCT_BASIC, 
  PRODUCT_STANDARD, 
  PRODUCT_PREMIUM, 
  PRODUCT_ELITE, 
  PRODUCT_ULTIMATE, 
  
  PRODUCT_BASIC_STANDARD_API_CALL, 
  PRODUCT_STANDARD_STANDARD_API_CALL, 
  PRODUCT_PREMIUM_STANDARD_API_CALL, 
  PRODUCT_ELITE_STANDARD_API_CALL, 
  PRODUCT_ULTIMATE_STANDARD_API_CALL,

  PRODUCT_BASIC_MAINTENACE_AND_SUPPORT,
  PRODUCT_STANDARD_MAINTENACE_AND_SUPPORT,
  PRODUCT_PREMIUM_MAINTENACE_AND_SUPPORT,
  PRODUCT_ELITE_MAINTENACE_AND_SUPPORT,
  PRODUCT_ULTIMATE_MAINTENACE_AND_SUPPORT,
  
  PRODUCT_BASIC_REPORTING,
  PRODUCT_STANDARD_REPORTING,
  PRODUCT_PREMIUM_REPORTING,
  PRODUCT_ELITE_REPORTING,
  PRODUCT_ULTIMATE_REPORTING,
];
