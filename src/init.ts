import dotenv from 'dotenv'
import * as nearAPI from 'near-api-js'

dotenv.config()

const NEAR_NETWORK = process.env.NEAR_NETWORK
const ACCOUNT_ID = process.env.ACCOUNT_ID
const PRIVATE_KEY = process.env.PRIVATE_KEY

const { keyStores, KeyPair } = nearAPI
const myKeyStore = new keyStores.InMemoryKeyStore()

const keyPair = KeyPair.fromString(PRIVATE_KEY)

await myKeyStore.setKey(NEAR_NETWORK, ACCOUNT_ID, keyPair)

export { NEAR_NETWORK, ACCOUNT_ID, PRIVATE_KEY, myKeyStore }
