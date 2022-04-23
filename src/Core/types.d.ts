import { NetWork } from '//Coin/FIL/types'

export interface Meta {
  walletName: string
}

export interface IAccount {
  address: string
  derivation_path: string
  coin: string
  network: NetWork
}

export interface ICrypto {
  cipher: 'aes-128-ctr'
  cipherText: string
  cipherparams: ICryptoParams
  version: number
  meta: Meta
}

export interface UnSignedMsg {
  from: string
  to: string
  nonce: number
  value: string
  gas_limit: number
  gas_fee_ap: string
  gas_premium: string
  method: number
  Params: string
  Version: string
}
