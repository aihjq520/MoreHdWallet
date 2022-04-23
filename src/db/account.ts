import { IAccount, ICrypto } from 'Core/types'
import { db } from 'db/storage'

class WalletStore {
  constructor() {
    db.keyStore.add({
      crypto: undefined,
      accounts: []
    })
  }

  async getAccount() {
    const rows = await db.keyStore.get(1)
    return rows?.accounts
  }

  async getCrypto() {
    const rows = await db.keyStore.get(1)
    return rows?.crypto
  }

  async saveAccount(account: IAccount) {
    const rows = await db.keyStore.get(1)
    const accountArray = rows?.accounts || []
    if (
      !rows?.accounts.find(
        (item) => item.address === account.address && item.coin === account.coin
      )
    ) {
      accountArray.push(account)
      db.keyStore.update(1, {
        accounts: accountArray
      })
    }
  }

  async saveCrypto(crypto: ICrypto) {
    db.keyStore.update(1, {
      crypto
    })
  }
}

export default new WalletStore()
