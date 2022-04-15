import { useEffect, useState } from 'react'

import { useGetKeyStore } from 'Coin/FIL'
import WalletApi from 'wallet'

const CreateWallet = () => {
  const [mnemonic, setMnemonic] = useState('')
  const [password, setPassword] = useState('')
  const [name, setWalletName] = useState('')
  const create = () => {
    setMnemonic(WalletApi.create('12345678', name))
  }

  useGetKeyStore()

  return (
    <>
      <div onClick={create}>创建身份钱包</div>
      {/* name */}
      <div>选择开启币种：FIL</div>
      {mnemonic && <div>你的助记是: {mnemonic}</div>}
    </>
  )
}

export default CreateWallet
