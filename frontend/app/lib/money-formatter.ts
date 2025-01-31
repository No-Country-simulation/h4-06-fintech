export const moneyFormatter = new Intl.NumberFormat('es-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

export function formatMoney(amount: number | string) {
  return moneyFormatter.format(
    typeof amount === 'number' ? amount : Number(amount),
  );
}
