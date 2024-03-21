import { getUser } from './functions/view'
import { claim } from './functions/write'
import { updateRemainingTimeInHours } from './utils/updateRemainingTime'

async function claimer() {
  while (true) {
    const user = await getUser()
    const claimTimestamp = Math.round(user.last_claim / 1e6)

    const TWELVE_HOURS = 12

    updateRemainingTimeInHours(TWELVE_HOURS, claimTimestamp)
    console.log('Claiming...')
    await claim()
    console.log('Claim successful!')
  }
}

claimer()
