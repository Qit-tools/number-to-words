# Number to Words Converter

[![Test status](https://github.com/Qit-tools/number-to-words/workflows/Node_CI/badge.svg)](https://github.com/Qit-tools/number-to-words/actions/workflows/node.js.yml)

This tiny library (🪶 1.4 KB) converts numbers to English words, supporting both general numeric values and monetary values with customizable currency and minor units.

👀 [DEMO](https://qit.tools/converters/number/to-words/)

## CDN

- [unpkg](https://unpkg.com/browse/@qit.tools/number-to-words/)

## 🏗️ Install

### 🎉 NPM

```bash
npm i @qit.tools/number-to-words
```

### 🧁 Bun

```bash
bun add @qit.tools/number-to-words
```

### 🌟 PNPM

```bash
pnpm add @qit.tools/number-to-words
```

### 🧶 Yarn

```bash
yarn add @qit.tools/number-to-words
```

## 🎓 How to use

### Importing the Function

```ts
import { numberToWords } from "@qit.tools/number-to-words";
```

### Basic Usage

```ts
const words = numberToWords(123); 
console.log(words); // "one hundred twenty-three"
```

### Handling Decimal Numbers

```ts
const words = numberToWords(123.45); 
console.log(words); // "one hundred twenty-three point four five"
```

### Formatting as Currency

```ts
const options = {
  money: {
    currency: ["dollar", "dollars"],
    minor: ["cent", "cents"]
  }
};

const words = numberToWords(123.45, options); 
console.log(words); // "one hundred twenty-three dollars and forty-five cents"
```

## 📝 Function Signature

### `numberToWords`

Converts a number to its corresponding words representation.

#### Parameters

- `num` (number): The number to be converted.
- `options` (Options, optional): An optional object to specify formatting options.

#### Returns

- `string`: The words representation of the number.

### Options

#### MoneyOptions

```ts
type MoneyOptions = {
  currency: [string, string];
  minor?: [string, string];
};
```

- `currency` (required): An array of two strings representing the singular and plural forms of the currency.
- `minor` (optional): An array of two strings representing the singular and plural forms of the minor currency unit.

#### Options

```ts
type Options = {
  money?: MoneyOptions;
};
```

- `money` (optional): An object specifying the money formatting options.

## 📄 Example Code

Here is an example of how you can use the library in your project:

```ts
import { numberToWords } from "number-to-words";

const number = 1234;
const words = numberToWords(number);
console.log(words); // "one thousand two hundred thirty-four"

const moneyOptions = {
  money: {
    currency: ["euro", "euros"],
    minor: ["cent", "cents"]
  }
};

const moneyWords = numberToWords(1234.56, moneyOptions);
console.log(moneyWords); // "one thousand two hundred thirty-four euros and fifty-six cents"
```

## License

MIT

## Contributions

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Author

Developed by [Qit.tools](https://github.com/Qit-tools).

---

Feel free to explore the source code and contribute to this library on [GitHub](https://github.com/Qit-tools/number-to-words).