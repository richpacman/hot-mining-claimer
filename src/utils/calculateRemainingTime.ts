export function calculateRemainingTimeInHours(hours: number, timestamp: number): number {
  const twelveHoursInMillis = hours * 60 * 60 * 1000
  const currentTimestamp = Date.now()
  const remainingTime = timestamp + twelveHoursInMillis - currentTimestamp
  return remainingTime
}

export function calculateRemainingTimeInMinutes(minutes: number, timestamp: number): number {
  const twelveHoursInMillis = minutes * 60 * 1000
  const currentTimestamp = Date.now()
  const remainingTime = timestamp + twelveHoursInMillis - currentTimestamp
  return remainingTime
}
