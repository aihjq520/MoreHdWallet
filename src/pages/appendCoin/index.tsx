import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { List, Image, Checkbox, Button } from 'antd-mobile'
import TNavBar from 'components/TNavBar'
import TToast from 'components/TToast'
import { COIN_LIST } from 'global/coinInfo'

const AppendCoin = () => {
  // TODO 获取已经选的身份币种
  const selected = [461]

  const [active, setActive] = useState<number[]>([])
  const navigate = useNavigate()

  const isDisabled = (id: number) => {
    return selected.includes(id)
  }

  const onBtnClick = () => {
    TToast.loadingToast('添加中...')
    setTimeout(() => {
      TToast.successToast('添加币种成功')
      setTimeout(() => {
        navigate(-1)
      }, 2000)
    }, 2000)
  }

  const onChange = (checked: boolean, id: number) => {
    setActive((v) => {
      if (checked) {
        return [...v, id]
      }
      return v.filter((f) => f !== id)
    })
  }

  return (
    <div className="w-screen h-screen">
      <TNavBar title="添加币种" className="bg-gray-100 border-b" />
      <div className="overflow-y-scroll pt-12 pb-28 h-screen">
        <List mode="default">
          {COIN_LIST.map((m) => (
            <List.Item
              key={m.id}
              prefix={
                <Image
                  src={m.icon || ''}
                  className="my-3 w-9 h-9 rounded-full"
                />
              }
              className="pl-6"
              clickable
              arrow={false}
              extra={
                <Checkbox
                  onChange={(_) => onChange(_, m.id)}
                  disabled={isDisabled(m.id)}
                  defaultChecked={isDisabled(m.id)}
                />
              }
              description={m.name}
            >
              {m.abb}
            </List.Item>
          ))}
        </List>
      </div>
      <div className="fixed bottom-0 p-4 pt-0 w-full bg-white border-t">
        <div className="pt-4 pb-2 text-base text-gray-500">
          请添加身份钱包下的币种（多选）。
        </div>
        <Button
          block
          color="primary"
          onClick={onBtnClick}
          size="large"
          disabled={!active.length}
        >
          确认
        </Button>
      </div>
    </div>
  )
}

export default AppendCoin
