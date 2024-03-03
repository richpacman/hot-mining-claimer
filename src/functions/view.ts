// @ts-nocheck

import { hotContract } from '../hotContract'
import { ACCOUNT_ID } from '../init'

async function getUser() {
  const user = await hotContract.get_user({ account_id: ACCOUNT_ID })

  return user
}

export { getUser }
