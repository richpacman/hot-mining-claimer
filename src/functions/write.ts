// @ts-nocheck

import { hotContract } from '../hotContract'
import { ACCOUNT_ID } from '../init'

async function claim() {
  const result = await hotContract.claim({ account_id: ACCOUNT_ID })

  return result
}

export { claim }
