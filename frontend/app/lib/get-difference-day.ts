import { differenceInDays } from 'date-fns'

export function getDifferenceDays(sinceDate: Date | string) {
  let date = sinceDate;

  if (typeof sinceDate === "string") {
    date = new Date(sinceDate)
  }

  const toady = new Date()

  const result = differenceInDays(toady, date)

  return result === 0 ? "Hoy" : `Hace ${result} días`
}