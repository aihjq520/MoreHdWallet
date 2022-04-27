import { useState } from 'react'

import { Button } from 'antd-mobile'
import { CloseCircleFill } from 'antd-mobile-icons'
import TNavBar from 'components/TNavBar'

const VerifyMnemonic = () => {
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

  const [active, setActive] = useState<string[]>([])

  const onSelect = (item: string) => {
    setActive((v) => (v.includes(item) ? v : v.concat([item])))
  }

  const onBtnClick = () => {
    console.log(1)
  }

  return (
    <>
      <TNavBar></TNavBar>
      <div className="px-8 pt-12 w-screen h-screen">
        <div className="pt-2 text-lg font-semibold">确认助记词</div>
        <div className="pt-1 text-gray-400">
          请按顺序点击助记词，以确认您正确备份。
        </div>
        <div className="pb-2 pl-2 h-60 break-all bg-gray-100 rounded-lg border-2">
          {active.map((m) => (
            <span
              key={m}
              className="inline-block relative p-2 mt-2 mr-2 text-base text-gray-900 rounded-lg border"
            >
              <CloseCircleFill className="absolute top-0 right-0 text-sm text-red-600" />
              {m}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap my-8">
          {list.map((m) => (
            <div
              key={m}
              className={`p-2 mt-2 mr-2 text-base text-gray-900 rounded-lg border ${
                active.includes(m) ? 'border-gray-100 text-gray-100' : ''
              }`}
              onClick={() => onSelect(m)}
            >
              {m}
            </div>
          ))}
        </div>
        <div className="fixed bottom-8 left-0 px-8 w-full">
          <Button block color="primary" onClick={() => onBtnClick()}>
            下一步
          </Button>
        </div>
      </div>
    </>
  )
}

export default VerifyMnemonic
