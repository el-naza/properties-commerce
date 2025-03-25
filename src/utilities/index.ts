export { cn } from './cn'
import { format, toZonedTime } from 'date-fns-tz'

export const duplicateArray = (arr, times) => Array(times).fill(arr).flat()

export function camelToTitleCase(str: string = ''): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between lowercase and uppercase
    .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2') // Add space between uppercase groups and lowercase
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const randomString = (length: number) =>
  [...crypto.getRandomValues(new Uint8Array(length))]
    .map((n) => String.fromCharCode(33 + (n % 94)))
    .join('')

export function formatDateForEmail(date) {
  // Define the Nigeria time zone (WAT)
  const nigeriaTimeZone = 'Africa/Lagos'

  // Convert the date to the Nigeria time zone
  const dateInNigeria = toZonedTime(date, nigeriaTimeZone)

  // Format the date according to your desired format
  const formattedDate = format(dateInNigeria, 'MMMM dd, yyyy, HH:mm zzz', {
    timeZone: nigeriaTimeZone,
  })

  return formattedDate
}

export function kebabToTitleCase(kebabString: string): string {
  return kebabString
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}
