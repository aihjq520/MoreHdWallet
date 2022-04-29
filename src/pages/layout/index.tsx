import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import { observer } from 'mobx-react'
import { ROUTE_WELCOME } from 'router/path'

const Layout = () => {
  const navigate = useNavigate()
  // 未创建身份钱包
  const flag = true
  if (flag) {
    return <Navigate to={ROUTE_WELCOME} replace />
  }

  return (
    <div>
      <div className="overflow-y-scroll pt-8 pr-20 pl-16 mt-28 ml-72 w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default observer(Layout)
