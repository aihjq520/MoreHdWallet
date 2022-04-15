import { ICrypto } from 'Core/types'
import { mnemonicToSeedSync } from 'bip39'
import blakejs from 'blakejs'
import { AES, PBKDF2, lib, mode, pad, enc } from 'crypto-js'
import { db } from 'db/storage'
import { useLiveQuery } from 'dexie-react-hooks'
import { ec } from 'elliptic'
import { encode } from 'utils/base32'
import { getChecksum } from 'utils/rsa'
import { v4 as uuidv4 } from 'uuid'

import { NetWork, Protocol } from './types'

const createBufferPro = () => {
  const protocolByte = Buffer.alloc(1)
  protocolByte[0] = Protocol.SECP256K1
  return protocolByte
}

export const createSeed = (menmonic: string, password?: string) => {
  return mnemonicToSeedSync(menmonic, password)
}

export const generateAddress = (netWork: NetWork) => {
  // const keyPair = generateEcKeyPair()
  // const pubArr = keyPair.getPublic('array')
  const protocolBuffer = createBufferPro()
  const payload = blakejs.blake2b('privateKey', null, 20)
  const checksum = getChecksum(Buffer.concat([protocolBuffer, payload]))
  const rawAddress = encode(Buffer.concat([payload, Buffer.from(checksum)]))
  const address = netWork + String(Protocol.SECP256K1) + rawAddress
  console.log(address)
  // return new FilAddress(
  //   keyPair.getPrivate('hex'),
  //   keyPair.getPublic('hex'),
  //   address
  // )
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
  // const key = '123456'
  const cipherData = enc.Base64.parse(cipherText).toString(enc.Utf8)
  const decrypedData = AES.decrypt(cipherData, key, {
    mode: mode.CTR,
    iv: enc.Hex.parse(iv)
  })
  console.log(decrypedData.toString(enc.Utf8))
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
