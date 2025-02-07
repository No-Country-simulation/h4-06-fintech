export function calcularCambio(
  precioCompra: number,
  precioActual: number,
  cantidad: number,
) {
  const inversionInicial = precioCompra * cantidad;
  const inversionActual = precioActual * cantidad;
  const amount = parseFloat((inversionActual - inversionInicial).toFixed(2));
  const percent = parseFloat(((amount / inversionInicial) * 100).toFixed(2));
  const isUp = amount > 0;

  return { isUp, amount, percent: `${percent}%` };
}
