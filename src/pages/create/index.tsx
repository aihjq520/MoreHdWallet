import { useState } from 'react'

import { db } from 'db/storage'
import { useLiveQuery } from 'dexie-react-hooks'
import WalletApi from 'wallet'

const CreateWallet = () => {
  const [mnemonic, setMnemonic] = useState('')
  const [password, setPassword] = useState('')
  const [name, setWalletName] = useState('')
  const create = async () => {
    setMnemonic(await WalletApi.create('12345678', name))
  }
  const useGetKeyStore = () => {
    const keyArr = useLiveQuery(() => db.keyStore.toArray())
    if (keyArr && keyArr?.length > 0 && keyArr[0]) {
      console.log(keyArr[0])
      return keyArr[0]
    }
    return null
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
