import * as nearAPI from 'near-api-js'
import { account } from './config'

const HOT_CONTRACT = 'game.hot.tg'

const { Contract } = nearAPI

const hotContract = new Contract(account, HOT_CONTRACT, {
  viewMethods: ['get_user'],
  changeMethods: ['claim'],
  useLocalViewExecution: false,
})

export { hotContract }
