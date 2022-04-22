import FilAddress from 'Coin/FIL/address'
import { NetWork } from 'Coin/FIL/types'
import HdWallet from 'Core/hdWallet'
import { Meta } from 'Core/types'
import { generateMnemonic } from 'bip39'
import AccountStore from 'db/account'
import COIN_INFO from 'global/coinInfo'
import { decryptPk } from 'utils/crypto'

const WalletApi = {
  create(password: string, walletName: string) {
    const meta = {
      walletName
    }
    const menmonic =
      'equip will roof matter pink blind book anxiety banner elbow sun young'
    const wallet = new HdWallet(menmonic, password, meta)
    const deriveParams = COIN_INFO.find(
      (item) => item.coin === 'FILECOIN' && item.network === NetWork.Main //todo币种不能写死
    )
    if (deriveParams) {
      wallet.deriveCoin(deriveParams, new FilAddress(NetWork.Main))
    }
    return menmonic
  },

  importWallet(mnemonic: string, passpharse: string, meta: Meta) {
    const wallet = new HdWallet(mnemonic, passpharse, meta)
    // wallet.deriveCoin()
  },

  async exportWallet(password: string) {
    const crypto = await AccountStore.getCrypto()
    if (!crypto) return ''
    return decryptPk(crypto, password)
  }
}
export default WalletApi
