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
