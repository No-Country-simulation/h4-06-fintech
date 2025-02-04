import { differenceInDays } from 'date-fns'

export function getDifferenceDays(date: Date) {
  const toady = new Date()

  const result = differenceInDays(toady, date)

  return result === 0 ? "Hoy" : `Hace ${result} días`
}