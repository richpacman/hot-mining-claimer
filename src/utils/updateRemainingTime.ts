import { calculateRemainingTimeInHours, calculateRemainingTimeInMinutes } from './calculateRemainingTime'

export function updateRemainingTimeInHours(hours: number, timestamp: number) {
  let remainingTime = calculateRemainingTimeInHours(hours, timestamp)

  while (remainingTime > 0) {
    const remainingHours = Math.floor(remainingTime / (60 * 60 * 1000))
    const remainingMinutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000))
    const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000)

    console.log(`Claiming HOT in : ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`)

    // Wait for 1 second before checking again
    // Note: This is a synchronous delay and might block other operations
    // In real-world applications, consider using asynchronous methods for delays
    const delayInMillis = 1000
    const startTime = Date.now()
    while (Date.now() - startTime < delayInMillis) {} // Delay loop

    remainingTime = calculateRemainingTimeInHours(hours, timestamp) // Update remaining time
  }
}

export function updateRemainingTimeInMinutes(minutes: number, yourTimestamp: number) {
  let remainingTime = calculateRemainingTimeInMinutes(minutes, yourTimestamp)

  while (remainingTime > 0) {
    const remainingMinutes = Math.floor(remainingTime / (60 * 1000)) // Convert milliseconds to minutes
    const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000)

    console.log(`Claiming HOT in : ${remainingMinutes} minutes, ${remainingSeconds} seconds`)

    // Wait for 1 second before checking again
    // Note: This is a synchronous delay and might block other operations
    // In real-world applications, consider using asynchronous methods for delays
    const delayInMillis = 1000
    const startTime = Date.now()
    while (Date.now() - startTime < delayInMillis) {} // Delay loop

    remainingTime = calculateRemainingTimeInMinutes(minutes, yourTimestamp) // Update remaining time
  }
}
