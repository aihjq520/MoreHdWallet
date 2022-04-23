import { IAccount, ICrypto } from 'Core/types'
import { db } from 'db/storage'

class WalletStore {
  init() {
    const account = this.getAccount()
    const crypto = this.getCrypto()
    if (!account && !crypto) {
      db.keyStore.add({
        crypto: undefined,
        accounts: []
      })
    }
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
        accounts: [account]
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
