import { useNavigate } from 'react-router-dom'

import { Button } from 'antd-mobile'
import TNavBar from 'components/TNavBar'
import { ROUTE_BACKUP_MNEMONIC_VERIFY } from 'router/path'

const CLASS_LIST = [
  'rounded-tl-lg  border-t-2 border-l-2',
  'border-t-2',
  'rounded-tr-lg border-t-2 border-r-2',
  'border-l-2',
  '',
  'border-r-2',
  'border-l-2',
  '',
  'border-r-2',
  'rounded-bl-lg border-b-2 border-l-2',
  'border-b-2',
  'rounded-br-lg border-r-2 border-b-2'
]

const Mnemonic = () => {
  const list = [
    'antenna',
    'trend',
    'lounge',
    'siren',
    'thrive',
    'nerve',
    'asthma',
    'season',
    'despair',
    'brush',
    'extra',
    'parrot'
  ]

  const navigate = useNavigate()

  const onBtnClick = () => {
    navigate(ROUTE_BACKUP_MNEMONIC_VERIFY)
  }

  return (
    <>
      <TNavBar></TNavBar>
      <div className="px-8 pt-12 w-screen h-screen">
        <div className="pt-2 text-lg font-semibold">备份助记词</div>
        <div className="pt-1 text-gray-400">
          请按顺序抄写助记词，确保备份正确。
        </div>
        <div className="grid grid-cols-3 my-8 ">
          {list.map((m, i) => (
            <div
              className={`px-3 py-5 relative border bg-gray-50 text-base ${CLASS_LIST[i]}`}
              key={m}
            >
              <div className="absolute top-1 right-1 text-xs leading-none text-gray-400">
                {i}
              </div>
              {m}
            </div>
          ))}
        </div>
        <ul className="pl-5 text-base list-disc list-outside text-gray-400">
          <li>妥善保管助记词至隔离网络的安全地方。</li>
          <li className="mt-2">
            请勿将助记词在联网环境下分析和存储，比如邮件、相册、社交应用等。
          </li>
        </ul>
        <div className="fixed bottom-8 left-0 px-8 w-full">
          <Button block color="primary" onClick={() => onBtnClick()}>
            已确认备份
          </Button>
        </div>
      </div>
    </>
  )
}

export default Mnemonic
