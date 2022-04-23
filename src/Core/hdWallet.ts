import * as secp from '@noble/secp256k1'

import { Address } from 'Coin/types'
import * as BIP32Factory from 'bip32'
import { mnemonicToSeedSync } from 'bip39'
import AccountStore from 'db/account'
import { ICoinInfo } from 'global/coinInfo'
import { decryptPk, encryptPk } from 'utils/crypto'

import { IAccount, ICrypto, Meta } from './types'

class HdWallet {
  static async fromMnemonic(mnemonic: string, passpharse: string, meta: Meta) {
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
    await AccountStore.saveCrypto(store)
  }

  static async deriveCoin(coinInfo: ICoinInfo, password: string, add: Address) {
    const crypto = await AccountStore.getCrypto()
    const mnemonic = decryptPk(crypto!, password)
    const rootNode = BIP32Factory.fromSeed(mnemonicToSeedSync(mnemonic))
    const childNode = rootNode.derivePath(coinInfo.derivation_path)
    const privateKey = childNode?.privateKey
    const publicKey = Buffer.from(secp.getPublicKey(privateKey!, false))
    const address = add.fromPublicKey(publicKey)
    console.log(address)
    const account: IAccount = {
      address,
      ...coinInfo
      // privateKey,
      // publicKey
    }
    AccountStore.saveAccount(account)
    return account
  }

  static async exportMnemonic(password: string) {
    const crypto = await AccountStore.getCrypto()
    if (!crypto) return ''
    return decryptPk(crypto, password)
  }

  // async signTransaction() {}
}

export default HdWallet
