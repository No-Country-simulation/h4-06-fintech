export const moneyFormatter = new Intl.NumberFormat('es-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});
