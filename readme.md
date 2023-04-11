# Invoice Generation (English)

## Description
This project is designed to generate invoices for a company that provides an API service with various pricing plans, including Basic, Standard, and Premium. The invoice generation process takes into account the number of API calls made by each customer and calculates the total cost based on the selected plan and additional charges for exceeding the included number of API calls. The output is a detailed invoice for each customer, containing information such as the customer's details, the plan they have subscribed to, and the additional charges incurred due to extra API calls.

## Dependencies
- typescript: The main development language for this project
- jest: A testing framework for JavaScript, used for testing functions
- ts-jest: A TypeScript preprocessor for Jest that compiles TypeScript code for testing with Jest

## Installation and Execution

To install the project, run the following commands:
> `$ yarn install`

To run the project, use:
> `$ yarn start`

To test all functions with Jest, use:
> `$ yarn test`

## Folder Structure
Folder: | Description
| --- | --- |
| createInvoices | Contains the main function createInvoices.ts and its associated test createInvoices.test.ts. |
| data | Contains demo data and various data structures such as calculationOptions.ts, contacts.ts, customers.ts, invoicePositions.ts, invoices.ts, and products.ts. |
| invoicing | Contains the function createInvoicePositions.ts that creates individual positions for an invoice, and its associated test createInvoicePositions.test.ts. |
| model | Contains interfaces for various data structures such as calculationOperation.ts, contact.ts, customer.ts, invoice.ts, invoicePosition.ts, and product.ts. |
| type | Exports reusable types like SupportedCountries, SupportedCurrencies, and UUID. |
| utils | Contains many small utility scripts needed by the main function createInvoices.ts. Each utility script also has an associated test script for Jest. |
| src/index.ts | Imports the main function and various data structures and executes the createInvoices function. |

## Available Products

### Products:
| key: | description | price per month | additional api calls price | additional price | products included
| --- | --- | --- | --- | --- | --- |
| Basic | Basic Product | 50 € | 10x | 0.10 | "Basic Maintenance & Support" & "Basic Reporting"
| Standard | Standard Product | 100 € | 1000x | 0.05 | "Standard Maintenance & Support" & "Standard Reporting"
| Premium | Premium Product | 300 € | 10000x | 0.04 | "Premium Maintenance & Support" & "Premium Reporting "
| Elite | Elite Product | 600 € | 100000x | 0.01 | "Elite Maintenance & Support" & "Elite Reporting"
| Ultimate | Ultimate Product | 1500 € | 1000000x | 0.02 | "Ultimate Maintenance & Support" & "Ultimate Reporting"

### Support Types:
| key: | Type: | Price: |
| --- | --- | --- |
| Basic Maintenance & Support | email | 0 €
| Standard Maintenance & Support | email | 0 €
| Premium Maintenance & Support | email | 0 €
| Elite Maintenance & Support | email & phone | 0 €
| Ultimate Maintenance & Support | email & phone | 0 €

### Reporting Types:
| key: | Type: | Price: |
| --- | --- | --- |
| Basic Reporting | email | 0 €
| Standard Reporting | email | 0 €
| Premium Reporting | email | 0 €
| Elite Reporting | standard | 0 €
| Ultimate Reporting | customized | 0 €

---

# Rechnungs Generator (Deutsch)

## Beschreibung

Dieses Projekt dient dazu, Rechnungen für ein Unternehmen zu erstellen, das einen API-Service mit verschiedenen Preismodellen anbietet, darunter Basic, Standard und Premium. Der Rechnungserstellungsprozess berücksichtigt die Anzahl der API-Aufrufe, die von jedem Kunden getätigt wurden, und berechnet die Gesamtkosten auf der Grundlage des gewählten Tarifs sowie zusätzlicher Gebühren für das Überschreiten der inbegriffenen Anzahl von API-Aufrufen. Das Ergebnis ist eine detaillierte Rechnung für jeden Kunden, die Informationen wie die Kundendaten, den abonnierten Tarif und die zusätzlichen Kosten, die durch zusätzliche API-Aufrufe entstanden sind, enthält.

## Abhängigkeiten
- typescript: Die Hauptentwicklungssprache für dieses Projekt
- jest: Ein Test-Framework für JavaScript, das zum Testen von Funktionen verwendet wird
- ts-jest: Ein TypeScript Preprocessor für Jest, der TypeScript-Code für das Testen mit Jest kompiliert

## Installation und Ausführung

Um das Projekt zu installieren, führen Sie die folgenden Befehle aus:
> `$ yarn install`

Um das Projekt auszuführen, verwenden Sie:
> `$ yarn start`

Um alle Funktionen mit Jest zu testen, verwenden Sie:
> `$ yarn test`

## Ordnerstruktur
Ordner: | Beschreibung
| --- | --- |
| createInvoices | Enthält die Hauptfunktion createInvoices.ts und den zugehörigen Test createInvoices.test.ts. |
| data | Enthält Demo-Daten und verschiedene Datenstrukturen, wie calculationOptions.ts, contacts.ts, customers.ts, invoicePositions.ts, invoices.ts und products.ts. |
| invoicing | Enthält die Funktion createInvoicePositions.ts, die die einzelnen Positionen für eine Rechnung erstellt, und den zugehörigen Test createInvoicePositions.test.ts. |
| model | Enthält Interfaces für verschiedene Datenstrukturen, wie calculationOperation.ts, contact.ts, customer.ts, invoice.ts, invoicePosition.ts und product.ts. |
| type | Exportiert wiederverwendbare Typen wie SupportedCountries, SupportedCurrencies und UUID. |
| utils | Enthält viele kleine Hilfsskripte, die von der Hauptfunktion createInvoices.ts benötigt werden. Jedes Hilfsskript hat auch ein zugehöriges Testskript für Jest. |
| src/index.ts | Importiert die Hauptfunktion und verschiedene Datenstrukturen und führt die Funktion createInvoices aus. |

## Available Products

### Products:
| key: | description | price per month | additional api calls price | additional price | products included
| --- | --- | --- | --- | --- | --- |
| Basic | Basic Product | 50 € | 10x | 0.10 | "Basic Maintenance & Support" & "Basic Reporting"
| Standard | Standard Product | 100 € | 1000x | 0.05 | "Standard Maintenance & Support" & "Standard Reporting"
| Premium | Premium Product | 300 € | 10000x | 0.04 | "Premium Maintenance & Support" & "Premium Reporting "
| Elite | Elite Product | 600 € | 100000x | 0.01 | "Elite Maintenance & Support" & "Elite Reporting"
| Ultimate | Ultimate Product | 1500 € | 1000000x | 0.02 | "Ultimate Maintenance & Support" & "Ultimate Reporting"

### Support Types:
| key: | Type: | Price: |
| --- | --- | --- |
| Basic Maintenance & Support | email | 0 €
| Standard Maintenance & Support | email | 0 €
| Premium Maintenance & Support | email | 0 €
| Elite Maintenance & Support | email & phone | 0 €
| Ultimate Maintenance & Support | email & phone | 0 €

### Reporting Types:
| key: | Type: | Price: |
| --- | --- | --- |
| Basic Reporting | email | 0 €
| Standard Reporting | email | 0 €
| Premium Reporting | email | 0 €
| Elite Reporting | standard | 0 €
| Ultimate Reporting | customized | 0 €
