type MoneyOptions = {
  currency: [string, string];
  minor?: [string, string];
};

type Options = {
  money?: MoneyOptions;
};

export const numberToWords = (num: number, options: Options = {}): string => {
  if (isNaN(num)) {
    throw new Error("Input is not a valid number");
  }
  const singleDigits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const thousands = ["", "thousand", "million", "billion", "trillion"];

  const convertHundreds = (num: number): string => {
    let result = "";
    if (num > 99) {
      result += singleDigits[Math.floor(num / 100)] + " hundred";
      num %= 100;
      if (num > 0) result += " ";
    }
    if (num > 19) {
      result += tens[Math.floor(num / 10)];
      num %= 10;
      if (num > 0) result += "-" + singleDigits[num];
    } else if (num > 9) {
      result += teens[num - 10];
    } else if (num > 0) {
      result += singleDigits[num];
    } else if (result === "") {
      result = singleDigits[0];
    }
    return result;
  };

  const convertNumberToWords = (num: number): string => {
    if (num === 0) return singleDigits[0];
    if (num < 0) return "minus " + convertNumberToWords(-num);

    let result = "";
    let thousandCounter = 0;

    while (num > 0) {
      const chunk = num % 1000;
      if (chunk > 0) {
        let chunkStr = convertHundreds(chunk);
        if (thousandCounter > 0) chunkStr += " " + thousands[thousandCounter];
        result = chunkStr + (result ? " " + result : "");
      }
      num = Math.floor(num / 1000);
      thousandCounter++;
    }

    return result;
  };

  const formatDecimalPart = (decimalPart: string): string => {
    return decimalPart
      .split("")
      .map((digit) => singleDigits[parseInt(digit, 10)])
      .join(" ");
  };

  const formatMoney = (num: number): string => {
    const integerPart = Math.floor(num);
    const decimalPart = Math.round((num - integerPart) * 100);

    const integerWords = convertNumberToWords(integerPart);
    const currencyWord =
      integerPart === 1
        ? options.money!.currency[0]
        : options.money!.currency[1];

    let result = `${integerWords} ${currencyWord}`;

    if (decimalPart > 0) {
      const decimalWords = convertNumberToWords(decimalPart);
      result += ` and ${decimalWords}${
        options.money!.minor
          ? " " +
            (decimalPart === 1
              ? options.money?.minor[0]
              : options.money?.minor[1])
          : ""
      }`;
    }

    return result;
  };

  const isMoney = options.money !== undefined;

  if (isMoney) {
    return formatMoney(num);
  } else {
    const [integerPart, decimalPart] = num.toString().split(".");

    let result = convertNumberToWords(parseInt(integerPart, 10));

    if (decimalPart !== undefined) {
      result += " point " + formatDecimalPart(decimalPart);
    }

    return result;
  }
};
