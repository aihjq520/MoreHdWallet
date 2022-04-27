import { useState } from 'react'

import { db } from 'db/storage'
import { useLiveQuery } from 'dexie-react-hooks'
import WalletApi from 'wallet'

const useCreateHooks = () => {
  const [mnemonic, setMnemonic] = useState('')
  const create = async (password: string, name: string) => {
    setMnemonic(await WalletApi.create(password, name))
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

  return {
    create,
    mnemonic
  }
}

export default useCreateHooks
