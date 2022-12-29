export interface Przedmiot {
  id: string;
  name: string;
  buy: number;
  sell: number;
  tier: number;
  enchant: number;
  quantity: number;
  fraction: Fraction;
}

export interface FormInterface {
  name: string;
  buy: number;
  sell: number;
  tier: number;
  enchant: number;
  fraction: string;
}

export enum Fraction {
  TF = "Thetford",
  BW = "Bridgewatch",
  FS = "Fort Sterling",
  ML = "Martlock",
  LYM = "Lymhurst",
}
