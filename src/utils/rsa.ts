import blakejs from 'blakejs'

export const getChecksum = (ingest: Buffer) => {
  return blakejs.blake2b(ingest, null, 4)
}

export const u8aToHex = (u8a: Uint8Array, prefix?: boolean) => {
  return `${prefix ? '0x' : ''}${Buffer.from(u8a).toString('hex')}`
}
