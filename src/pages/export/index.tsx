import { useState } from 'react'

import WalletApi from 'wallet'

const ExportWallet = () => {
  const [mnemonic, setMneMonic] = useState('')
  const handleExport = async () => {
    setMneMonic(await WalletApi.exportWallet('12345678'))
  }
  return (
    <>
      <div onClick={handleExport}>导出钱包</div>
      {mnemonic && <div>助记词是{mnemonic}</div>}
    </>
  )
}

export default ExportWallet
