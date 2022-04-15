import { mnemonicToSeedSync } from 'bip39'
import blakejs from 'blakejs'
import { encode } from 'utils/base32'

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
  // const protocolBuffer = createBufferPro()
  // const payload = blakejs.blake2b('privateKey', null, 20)
  // const checksum = getChecksum(Buffer.concat([protocolBuffer, payload]))
  // const rawAddress = encode(Buffer.concat([payload, Buffer.from(checksum)]))
  // const address = netWork + String(Protocol.SECP256K1) + rawAddress
  // console.log(address)
  // return new FilAddress(
  //   keyPair.getPrivate('hex'),
  //   keyPair.getPublic('hex'),
  //   address
  // )
}
