export type TPage =
  | "overview"
  | "chart"
  | "transactions"
  | "wallet"
  | "news"
  | "mail";

export interface ICard {
  id?: string;
  image: React.ReactElement;
  name: string;
  shortName: string;
  price: number;
  priceChanges: number;
  chartData: number[];
  color: string;
}
