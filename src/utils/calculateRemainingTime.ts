function calculateRemainingTime(lastClaimTimestamp: bigint): string {
  const timestampLimitInMilliseconds = 11 * 60 * 60 * 1000
  const currentTimeMilliseconds = Date.now()
  const timePassedMilliseconds = Number(currentTimeMilliseconds) - Number(lastClaimTimestamp) / 1000000

  const remainingTimeMilliseconds = timestampLimitInMilliseconds - timePassedMilliseconds
  const remainingHours = Math.floor(remainingTimeMilliseconds / (60 * 60 * 1000))
  const remainingMinutes = Math.floor((remainingTimeMilliseconds % (60 * 60 * 1000)) / (60 * 1000))
  const remainingSeconds = Math.floor((remainingTimeMilliseconds % (60 * 1000)) / 1000)

  return `${remainingHours} hours ${remainingMinutes} minutes ${remainingSeconds} seconds`
}

export { calculateRemainingTime }
