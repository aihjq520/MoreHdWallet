import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button, Divider } from 'antd-mobile'
import TNavBar from 'components/TNavBar'
import { ROUTE_BACKUP_MNEMONIC } from 'router/path'

import Sheet from './sheet'

const Backup = () => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const onAction = () => {
    navigate(ROUTE_BACKUP_MNEMONIC, { state: location.state })
  }

  return (
    <>
      <TNavBar />
      <div className="pt-12 w-full h-full">
        <div className="h-2/5"></div>
        <div className="pt-2 pl-6 text-xl font-semibold">备份提示</div>
        <div className="pt-0.5 pl-6 text-base text-gray-400">
          获得助记词等于拥有钱包资产所有权
        </div>
        <Divider className="px-6" />
        <ul className="pt-2 pl-6 text-base list-disc list-inside text-gray-400">
          <li>助记词由英文单词组成，请抄写并妥善保管。</li>
          <li className="mt-6">助记词丢失将无法找回，请务必备份助记词。</li>
        </ul>
        <div className="fixed bottom-8 left-0 px-6 w-full">
          <Button block color="primary" onClick={() => setVisible(true)}>
            立即备份
          </Button>
          {/* <Button block fill="none" className="mt-1 text-sm" color="primary">
          稍后备份
        </Button> */}
        </div>
      </div>
      <Sheet
        visible={visible}
        onClose={() => setVisible(false)}
        onAction={onAction}
      />
    </>
  )
}

export default Backup
