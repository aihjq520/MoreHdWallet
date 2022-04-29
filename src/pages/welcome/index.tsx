import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { RightOutline } from 'antd-mobile-icons'
import AccountStore from 'db/account'
import {
  ROUTE_CREATE_WALLET,
  ROUTE_IMPORT_WALLET,
  ROUTE_ROOT
} from 'router/path'

const Welcome = () => {
  const navigate = useNavigate()

  // 未创建身份钱包
  useEffect(() => {
    const asyncFn = async () => {
      const account = await AccountStore.getAccount()
      if (account) {
        navigate(ROUTE_ROOT, { replace: true })
      }
    }
    asyncFn()
  }, [navigate])

  return (
    <div className="relative w-screen h-screen">
      <div className="h-3/5"></div>
      <div className="pl-6 mx-6 rounded-lg border">
        <Link
          to={ROUTE_CREATE_WALLET}
          className="inline-block relative py-4 w-full border-b"
        >
          <span className="text-lg text-blue-500">创建钱包</span>
          <br />
          <span className="text-sm text-gray-400">第一次使用钱包</span>
          <RightOutline className="absolute top-1/2 right-3 text-lg text-gray-400 -translate-y-1/2" />
        </Link>
        <Link
          to={ROUTE_IMPORT_WALLET}
          className="inline-block relative py-4 w-full"
        >
          <span className="text-lg text-blue-500">恢复身份</span>
          <br />
          <span className="text-sm text-gray-400">已拥有钱包</span>
          <RightOutline className="absolute top-1/2 right-3 text-lg text-gray-400 -translate-y-1/2" />
        </Link>
      </div>
    </div>
  )
}

export default Welcome
