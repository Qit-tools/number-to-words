type MoneyOptions = {
    currency: [string, string];
    minor?: [string, string];
};
type Options = {
    money?: MoneyOptions;
};
export declare const numberToWords: (num: number, options?: Options) => string;
export {};
