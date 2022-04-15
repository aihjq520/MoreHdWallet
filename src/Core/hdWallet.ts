import { decryptPk, encryptPk } from 'Coin/FIL'
import { Address } from 'Coin/types'
import * as BIP32Factory from 'bip32'
import { generateMnemonic, mnemonicToSeedSync } from 'bip39'
import AccountStore from 'db/account'
import { ICoinInfo } from 'global/coinInfo'

import { IAccount, ICrypto, Meta } from './types'

class HdWallet {
  private _mnemonic: string
  private _rootNode: BIP32Factory.BIP32Interface
  constructor(mnemonic: string, passpharse: string, meta: Meta) {
    this._mnemonic = mnemonic
    this._rootNode = BIP32Factory.fromSeed(
      mnemonicToSeedSync(mnemonic, passpharse)
    )
    const { encData, iv, salt } = encryptPk(mnemonic, passpharse)
    const store: ICrypto = {
      version: 1,
      cipher: 'aes-128-ctr',
      cipherText: encData,
      cipherparams: {
        iv: iv.toString(),
        salt
      },
      meta
    }
    AccountStore.saveCrypto(store)
  }

  static newWallet(password: string, meta: Meta) {
    const menmonic = generateMnemonic()
    return new HdWallet(menmonic, password, meta)
  }

  get mnemonic() {
    return this._mnemonic
  }

  deriveCoin(coinInfo: ICoinInfo, add: Address) {
    const childNode = this._rootNode.derivePath(coinInfo.derivation_path)
    const privateKey = childNode?.privateKey
    const publicKey = childNode.publicKey
    const address = add.fromPublicKey(publicKey)
    const account: IAccount = {
      address,
      ...coinInfo
      // privateKey,
      // publicKey
    }
    AccountStore.saveAccount(account)
    //存储account
    return account
  }

  async exportMnemonic(password: string) {
    const crypto = await AccountStore.getCrypto()
    if (!crypto) return ''
    return decryptPk(crypto, password)
  }
}

export default HdWallet
