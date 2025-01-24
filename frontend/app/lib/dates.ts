import { addMonths, differenceInMonths, format } from 'date-fns';
import { es } from 'date-fns/locale';

export function getLimitDate(startDate: string, months: number) {
  const aux = new Date(startDate);
  const futureDate = addMonths(aux, months);
  console.log({ startDate });

  const formattedDate = format(futureDate, "d 'de' MMMM 'de' yyyy", {
    locale: es,
  });
  return formattedDate;
}

export function getMonthsUntil(startDate: string, months: number) {
  const aux = new Date(startDate);
  const targetDate = addMonths(aux, months);

  const currentDate = new Date();
  const monthsUntilTarget = differenceInMonths(targetDate, currentDate);

  return `${monthsUntilTarget} meses para llegar a la fecha límite`;
}
