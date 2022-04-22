import { Address } from 'Coin/types'
import base32Encode from 'base32-encode'
import blakejs from 'blakejs'

import { encode } from '../../utils/base32'
import { Blake2BSize, NetWork, Protocol } from './types'

class FilAddress implements Address {
  private _network: NetWork

  constructor(network: NetWork) {
    this._network = network
  }

  private addressHash(pv: Buffer) {
    return this.hash(pv, Blake2BSize.Payload)
  }

  private checkSum(payload: Buffer) {
    return this.hash(payload, Blake2BSize.CheckSum)
  }

  fromPublicKey(publicBytes: Buffer) {
    return this.newAddress(Protocol.SECP256K1, this.addressHash(publicBytes))
  }

  private newAddress(proto: Protocol, payload: Uint8Array) {
    const protocolByte = Buffer.alloc(1)
    protocolByte[0] = proto
    const checkSum = this.checkSum(Buffer.concat([protocolByte, payload]))
    const encodeAddress = base32Encode(
      Buffer.concat([payload, Buffer.from(checkSum)]),
      'RFC4648',
      {
        padding: false
      }
    )
    return `${this._network}${proto}${encodeAddress}`
  }

  private hash(ingest: Buffer, size: Blake2BSize) {
    return blakejs.blake2b(ingest, null, size)
  }
}

export default FilAddress
