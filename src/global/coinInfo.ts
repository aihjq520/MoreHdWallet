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
    derivation_path: "m/44'/461'/0'/0/0",
    curve: Protocol.SECP256K1,
    network: NetWork.Main
  },
  {
    coin: 'FILECOIN',
    derivation_path: "m/44'/461'/0'/0/0",
    curve: Protocol.SECP256K1,
    network: NetWork.Test
  }
]

export const COIN_LIST = [
  {
    id: 0,
    name: 'Bitcoin',
    abb: 'BTC',
    icon: 'src/assets/icons/bitcoin.png'
  },
  {
    id: 60,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 61,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 62,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 63,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 64,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 65,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 66,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 67,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 68,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 69,
    name: 'Ethereum',
    abb: 'ETH',
    icon: 'src/assets/icons/ethereum.png'
  },
  {
    id: 461,
    name: 'Filecoin',
    abb: 'FIL',
    icon: 'src/assets/icons/filecoin.png'
  }
]

export default COIN_INFO
