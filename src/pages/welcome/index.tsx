import { Link } from 'react-router-dom'

import { RightOutline } from 'antd-mobile-icons'
import { ROUTE_CREATE_WALLET, ROUTE_IMPORT_WALLET } from 'router/path'

const Welcome = () => {
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
