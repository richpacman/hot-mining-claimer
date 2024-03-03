declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEAR_NETWORK: string
      ACCOUNT_ID: string
      PRIVATE_KEY: string
    }
  }
}

export {}
