import { describe, expect, it } from "vitest";

import { numberToWords } from "../src/index";

describe("numberToWords", () => {
  it("should convert integer numbers to words", () => {
    expect(numberToWords(0)).toBe("zero");
    expect(numberToWords(1)).toBe("one");
    expect(numberToWords(15)).toBe("fifteen");
    expect(numberToWords(123)).toBe("one hundred twenty-three");
    expect(numberToWords(1001)).toBe("one thousand one");
    expect(numberToWords(12345)).toBe(
      "twelve thousand three hundred forty-five",
    );
    expect(numberToWords(1000000)).toBe("one million");
  });
  it("should convert decimal numbers to words", () => {
    expect(numberToWords(1.01)).toBe("one point zero one");
    expect(numberToWords(12.34)).toBe("twelve point three four");
    expect(numberToWords(123.456)).toBe(
      "one hundred twenty-three point four five six",
    );
    expect(numberToWords(1001.01)).toBe("one thousand one point zero one");
  });
  it("should handle large numbers correctly", () => {
    expect(numberToWords(1000000000)).toBe("one billion");
    expect(numberToWords(1234567890)).toBe(
      "one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety",
    );
  });
  it("should handle plural forms correctly", () => {
    expect(numberToWords(2000)).toBe("two thousand");
    expect(numberToWords(2001)).toBe("two thousand one");
  });
  it("should throw an error for invalid input", () => {
    expect(() => numberToWords(NaN)).toThrow("Input is not a valid number");
  });
  it("should handle edge cases", () => {
    expect(numberToWords(100)).toBe("one hundred");
    expect(numberToWords(101)).toBe("one hundred one");
    expect(numberToWords(110)).toBe("one hundred ten");
    expect(numberToWords(1000)).toBe("one thousand");
    expect(numberToWords(10000)).toBe("ten thousand");
    expect(numberToWords(100000)).toBe("one hundred thousand");
    expect(numberToWords(10000000)).toBe("ten million");
  });
  it("should handle very large numbers", () => {
    expect(numberToWords(1000000000000)).toBe("one trillion");
    expect(numberToWords(1000000000001)).toBe("one trillion one");
  });
  it("should handle numbers with trailing zeros in the fractional part", () => {
    expect(numberToWords(1.1)).toBe("one point one");
    expect(numberToWords(123.45)).toBe(
      "one hundred twenty-three point four five",
    );
  });
});
describe("Numbers", () => {
  it("Numbers", () => {
    expect(numberToWords(-100)).toBe("minus one hundred");
    expect(numberToWords(-1)).toBe("minus one");
    expect(numberToWords(1.1)).toBe("one point one");
    expect(numberToWords(1.01)).toBe("one point zero one");
    expect(numberToWords(10.01)).toBe("ten point zero one");
    expect(numberToWords(1001.000002345)).toBe(
      "one thousand one point zero zero zero zero zero two three four five",
    );
  });
});
describe("Money", () => {
  it("Money", () => {
    expect(
      numberToWords(1.1, {
        money: {
          currency: ["dollar", "dollars"],
          minor: ["cent", "cents"],
        },
      }),
    ).toBe("one dollar and ten cents");
    expect(
      numberToWords(1.01, {
        money: {
          currency: ["dollar", "dollars"],
          minor: ["cent", "cents"],
        },
      }),
    ).toBe("one dollar and one cent");
    expect(
      numberToWords(1.99, {
        money: {
          currency: ["dollar", "dollars"],
          minor: ["cent", "cents"],
        },
      }),
    ).toBe("one dollar and ninety-nine cents");
    expect(
      numberToWords(99.99, {
        money: {
          currency: ["dollar", "dollars"],
          minor: ["cent", "cents"],
        },
      }),
    ).toBe("ninety-nine dollars and ninety-nine cents");
    expect(
      numberToWords(100.99, {
        money: {
          currency: ["dollar", "dollars"],
          minor: ["cent", "cents"],
        },
      }),
    ).toBe("one hundred dollars and ninety-nine cents");
  });
});
describe("Not using minor currency", () => {
  it("JPY", () => {
    expect(
      numberToWords(100.99, {
        money: {
          currency: ["JPY", "JPY"],
        },
      }),
    ).toBe("one hundred JPY and ninety-nine");
  });
});
