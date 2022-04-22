import { NetWork, Protocol } from 'Coin/FIL/types'

export interface ICoinInfo {
  coin: string
  derivation_path: string
  curve: Protocol
  network: NetWork
}

export const COIN_INFO = [
  {
    coin: 'FILECOIN',
    derivation_path: "m/44'/461'/0/0/0",
    curve: Protocol.SECP256K1,
    network: NetWork.Main
  },
  {
    coin: 'FILECOIN',
    derivation_path: "m/44'/461'/0/0/0",
    curve: Protocol.SECP256K1,
    network: NetWork.Test
  }
]

export default COIN_INFO
