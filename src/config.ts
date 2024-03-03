import * as nearAPI from 'near-api-js'
import { ACCOUNT_ID, myKeyStore } from './init'

const { connect } = nearAPI

const connectionConfig = {
  networkId: 'mainnet',
  keyStore: myKeyStore,
  nodeUrl: 'https://near.lava.build/lava-referer-0121806e-ccf5-4844-87bc-232ae0628c13',
  walletUrl: 'https://wallet.mainnet.near.org',
  helperUrl: 'https://helper.mainnet.near.org',
  explorerUrl: 'https://nearblocks.io',
}

const nearConnection = await connect(connectionConfig)
const account = await nearConnection.account(ACCOUNT_ID)

export { nearConnection, account }
