import { IAccount, ICrypto } from 'Core/types'
import Dexie, { Table } from 'dexie'

export interface ICryptoParams {
  iv: string
  salt: string
}

export interface HdKeyStore {
  // mnemonic: string
  crypto?: ICrypto
  accounts: Array<IAccount>
}

export class MySubClassedDexie extends Dexie {
  keyStore!: Table<HdKeyStore>

  constructor() {
    super('myDatabase')
    this.version(1).stores({
      keyStore: '++id, accounts, crypto' // Primary key and indexed props
    })
  }
}

export const db = new MySubClassedDexie()
