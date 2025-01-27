import { addMonths, differenceInMonths, format } from 'date-fns';
import { es } from 'date-fns/locale';

export function getLimitDate(startDate: Date, startFinish: Date) {
  // Calculate the difference in months
  const monthsDifference = differenceInMonths(startFinish, startDate);

  // Add the difference in months to the start date
  const futureDate = addMonths(startDate, monthsDifference);

  const formattedDate = format(futureDate, "d 'de' MMMM 'de' yyyy", {
    locale: es,
  });
  return formattedDate;
}

export function getMonthsUntil(startFinish: Date) {
  const currentDate = new Date();
  const monthsUntilTarget = differenceInMonths(startFinish, currentDate);

  return `${monthsUntilTarget} meses para llegar a la fecha límite`;
}
