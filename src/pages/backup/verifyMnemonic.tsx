import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button } from 'antd-mobile'
import { CloseCircleFill } from 'antd-mobile-icons'
import TNavBar from 'components/TNavBar'
import Prompt from 'components/TNavBar/Prompt'
import TToast from 'components/TToast'

const useHooks = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [random, setRandom] = useState<string[]>([])
  const [active, setActive] = useState<string[]>([])
  const [visible, setVisible] = useState(false)

  const { mnemonic } = location.state as { mnemonic: string }

  const source = useMemo<string[]>(() => mnemonic.split(' '), [mnemonic])

  // 初始化，打乱助记词
  useEffect(() => {
    setRandom(
      source.slice(0).sort(() => {
        return 0.5 - Math.random()
      })
    )
  }, [source])

  // 判断选择的助记词是否正确
  useEffect(() => {
    if (active.join('') !== source.slice(0, active.length).join('')) {
      setVisible(true)
      return
    }
    setVisible(false)
  }, [active, source])

  const isAllTrue = useCallback(() => {
    return source.join('') === active.join('')
  }, [active, source])

  const isTrue = (index: number) => {
    return source[index] === active[index]
  }

  // 选择助记词
  const onSelect = (item: string) => {
    setActive((v) => [...v, item])
  }

  // 结束备份
  const onBtnClick = () => {
    TToast.successToast('备份成功')
    setTimeout(() => {
      navigate(-3)
    }, 1500)
  }

  // 删除选中的助记词
  const onDeleteItem = (index: number) => {
    setActive((v) => v.filter((_, i) => i !== index))
  }

  return {
    random,
    active,
    visible,
    isTrue,
    isAllTrue,
    onSelect,
    onBtnClick,
    onDeleteItem
  }
}

const VerifyMnemonic = () => {
  const {
    visible,
    active,
    random,
    isTrue,
    isAllTrue,
    onSelect,
    onBtnClick,
    onDeleteItem
  } = useHooks()

  return (
    <>
      <Prompt visible={visible} color="error">
        助记词顺序不正确，请校对！
      </Prompt>
      <TNavBar></TNavBar>
      <div className="px-8 pt-12 w-screen h-screen">
        <div className="pt-2 text-lg font-semibold">确认助记词</div>
        <div className="pt-1 text-gray-400">
          请按顺序点击助记词，以确认您正确备份。
        </div>
        <div className="pb-2 pl-2 mt-8 min-h-40 break-all bg-gray-100 rounded-lg border-2">
          {active.map((m, i) => (
            <Button
              key={m}
              className="relative mt-2 mr-2 text-base text-gray-900 bg-white"
              style={{ '--border-radius': '0.5rem' }}
              onClick={() => onDeleteItem(i)}
            >
              {isTrue(i) ? null : (
                <CloseCircleFill className="absolute -top-1 -right-1 text-sm text-red-500" />
              )}
              {m}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap my-8">
          {random.map((m) => (
            <Button
              key={m}
              className={`mt-2 mr-2 text-base text-gray-900 ${
                active.includes(m) ? 'border-gray-100 text-gray-100' : ''
              }`}
              style={{ '--border-radius': '0.5rem' }}
              disabled={active.includes(m)}
              onClick={() => onSelect(m)}
            >
              {m}
            </Button>
          ))}
        </div>
        <div className="fixed bottom-8 left-0 px-8 w-full">
          <Button
            block
            color="primary"
            disabled={!isAllTrue()}
            onClick={() => onBtnClick()}
          >
            完成备份
          </Button>
        </div>
      </div>
    </>
  )
}

export default VerifyMnemonic
