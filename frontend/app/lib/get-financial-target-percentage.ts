export function getFinancialTargetPercentage(
  amount: string,
  progress: string,
): string {
  return Number(progress) > 0
    ? `${((Number(progress) / Number(amount)) * 100).toFixed(0)}%`
    : '0%';
}
