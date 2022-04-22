import { ICrypto } from 'Core/types'
import { AES, PBKDF2, lib, mode, enc } from 'crypto-js'
import { db } from 'db/storage'
import { useLiveQuery } from 'dexie-react-hooks'
import { v4 as uuidv4 } from 'uuid'

export const u8aToHex = (u8a: Uint8Array, prefix?: boolean) => {
  return `${prefix ? '0x' : ''}${Buffer.from(u8a).toString('hex')}`
}

export const encryptPk = (message: string, password: string) => {
  const salt = uuidv4()
  const key = PBKDF2(password, salt, {
    keySize: 128 / 32 //256bit
  })
  const iv = lib.WordArray.random(8)
  const encryptedData = AES.encrypt(message, key, {
    mode: mode.CTR,
    iv: iv
  })

  const encData = enc.Base64.stringify(enc.Utf8.parse(encryptedData.toString()))
  return { encData, iv, salt }
}

export const decryptPk = (mesg: ICrypto, password: string) => {
  const { cipherText, cipherparams } = mesg
  const { iv, salt } = cipherparams
  const key = PBKDF2(password, salt, {
    keySize: 128 / 32 //256bit
  })
  const cipherData = enc.Base64.parse(cipherText).toString(enc.Utf8)
  const decrypedData = AES.decrypt(cipherData, key, {
    mode: mode.CTR,
    iv: enc.Hex.parse(iv)
  })
  return decrypedData.toString(enc.Utf8)
}

export const useGetKeyStore = () => {
  const keyArr = useLiveQuery(() => db.keyStore.toArray())
  if (keyArr && keyArr?.length > 0 && keyArr[0]) {
    console.log(keyArr[0])
    // decryptPk(keyArr[0], '123456')
    return keyArr[0]
  }
  return null
}
