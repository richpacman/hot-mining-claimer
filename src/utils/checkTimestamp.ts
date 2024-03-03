// EVERY 11 HOURS - CHANGE THIS BELOW YOUR CURRENT MAX CLAIM TIME IN THE APP
const CLAIM_TIMESPAN = 11 * 60 * 60 * 1000

// CHECK CLAIM LAST TIMESTAMP AND COMPARE IT
function checkTimestamp(timestampNs: bigint): boolean {
  const timestampInMs = Number(timestampNs / BigInt(1e6))
  const currentTimeMs = new Date().getTime()

  const timestampLimit = currentTimeMs - CLAIM_TIMESPAN

  return timestampInMs <= timestampLimit
}

export { checkTimestamp }
