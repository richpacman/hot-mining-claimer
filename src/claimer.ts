import { getUser } from './functions/view'
import { claim } from './functions/write'
import { calculateRemainingTime } from './utils/calculateRemainingTime'
import { checkTimestamp } from './utils/checkTimestamp'
import { delay } from './utils/delay'

async function claimer() {
  const user = await getUser()
  const lastClaimTimestamp = BigInt(user.last_claim)

  const isTimePassed = checkTimestamp(lastClaimTimestamp)

  while (true) {
    if (!isTimePassed) {
      const remainingTime = calculateRemainingTime(lastClaimTimestamp)
      console.log(`\x1b[33mClaiming in ${remainingTime}\x1b[0m`)
      await delay(1000)
      continue
    }

    try {
      console.log('\x1b[36mAttempting to claim...\x1b[0m')

      await claim()

      console.log('\x1b[32mClaim Successful!\x1b[0m')
    } catch (error) {
      console.log('\x1b[31m' + error + '\x1b[0m')
    }

    console.log('\x1b[35mChecking for next claim...\x1b[0m')
  }
}

claimer()
