import { Fraction, Przedmiot } from "./interfaces";

export function convertTierToName(tier: number) {
  switch (tier) {
    case 1:
      return "nowicjusza";

    case 2:
      return "nowicjusza";

    case 3:
      return "nowicjusza";

    case 4:
      return "adept's";

    case 5:
      return "expert's";

    case 6:
      return "master's";

    case 7:
      return "grandmaster's";

    case 8:
      return "elder's";

    default:
      return "adept's";
  }
}

export function calculateProfitInPercentages(buy: number, sell: number) {
  const profitValue = sell - buy;
  const value = ((profitValue / buy) * 100).toFixed(2) + "%";
  return value;
}

export function calculateTotalProfit(items: Przedmiot[]) {
  return items.map((item) => item.sell - item.buy).reduce((a, b) => a + b);
}

export function initialCalculations(items: Przedmiot[]) {
  const totalIncome = items
    .map((item) => (item.sell - item.buy) * item.quantity)
    .reduce((a, b) => a + b);
  const totalOutcome = items
    .map((item) => item.buy * item.quantity)
    .reduce((a, b) => a + b);

  const percentageTotalValue =
    ((totalIncome / totalOutcome) * 100).toFixed(2) + "%";

  return { totalIncome, totalOutcome, percentageTotalValue };
}

export function getFractionColor(fraction: Fraction) {
  switch (fraction) {
    case Fraction.BW:
      return "bg-orange-600";
    case Fraction.FS:
      return "bg-gray-200";
    case Fraction.LYM:
      return "bg-green-600";
    case Fraction.ML:
      return "bg-blue-600";
    default:
    case Fraction.TF:
      return "bg-purple-600";
  }
}

export function numberWithSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
