import FilAddress from 'Coin/FIL/address'
import { NetWork } from 'Coin/FIL/types'
import HdWallet from 'Core/hdWallet'
import { Meta, UnSignedMsg } from 'Core/types'
import { generateMnemonic } from 'bip39'
import AccountStore from 'db/account'
import COIN_INFO from 'global/coinInfo'
import { decryptPk } from 'utils/crypto'

class WalletApi {
  async create(password: string, walletName: string) {
    const meta = {
      walletName
    }
    const menmonic = generateMnemonic()
    await HdWallet.fromMnemonic(menmonic, password, meta)
    const deriveParams = COIN_INFO.find(
      (item) => item.coin === 'FILECOIN' && item.network === NetWork.Main //todo币种不能写死
    )
    if (deriveParams) {
      await HdWallet.deriveCoin(
        deriveParams,
        password,
        new FilAddress(NetWork.Main)
      )
    }
    return menmonic
  }

  importWallet(mnemonic: string, passpharse: string, meta: Meta) {
    HdWallet.fromMnemonic(mnemonic, passpharse, meta)
    // wallet.deriveCoin()
  }

  async exportWallet(password: string) {
    const crypto = await AccountStore.getCrypto()
    if (!crypto) return ''
    return decryptPk(crypto, password)
  }

  signMessage() {
    // let unSignMsg: UnSignedMsg = {
    //   from: '',
    //   to: ''
    // }
  }
}
export default new WalletApi()
