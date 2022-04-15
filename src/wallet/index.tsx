import { decryptPk } from 'Coin/FIL'
import FilAddress from 'Coin/FIL/address'
import { NetWork } from 'Coin/FIL/types'
import HdWallet from 'Core/hdWallet'
import { Meta } from 'Core/types'
import AccountStore from 'db/account'
import COIN_INFO from 'global/coinInfo'

const WalletApi = {
  create(password: string, walletName: string) {
    const meta = {
      walletName
    }
    const wallet = HdWallet.newWallet(password, meta) //todo: wallet示例对象需要存在recoil
    const deriveParams = COIN_INFO.find(
      (item) => item.coin === 'FILECOIN' && item.network === NetWork.Main //todo币种不能写死要选择
    )
    if (deriveParams) {
      wallet.deriveCoin(deriveParams, new FilAddress(NetWork.Main))
    }
    return wallet.mnemonic
  },

  importWallet(mnemonic: string, passpharse: string, meta: Meta) {
    new HdWallet(mnemonic, passpharse, meta)
    return ''
  },

  async exportWallet(password: string) {
    const crypto = await AccountStore.getCrypto()
    if (!crypto) return ''
    return decryptPk(crypto, password)
  }
}
export default WalletApi
