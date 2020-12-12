export interface IExchangeRates {
  rates: { [key: string]: Rate };
}

export interface Rate {
  name: string;
  unit: string;
  value: number;
  type: Type;
}

export enum Type {
  Commodity = "commodity",
  Crypto = "crypto",
  Fiat = "fiat",
}
