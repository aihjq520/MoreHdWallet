import { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

import AccountStore from 'db/account'
import { observer } from 'mobx-react'
import { ROUTE_HOME, ROUTE_ROOT, ROUTE_WELCOME } from 'router/path'

const tabs = [
  {
    key: '/home',
    title: '首页'
    // icon: <AppOutline />
  },
  {
    key: '/me',
    title: '我的'
    // icon: <UnorderedListOutline />
  }
]

const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  // 未创建身份钱包
  useEffect(() => {
    const asyncFn = async () => {
      const account = await AccountStore.getAccount()
      if (!account) {
        navigate(ROUTE_WELCOME, { replace: true })
      }
    }
    asyncFn()
  }, [navigate])

  const { pathname } = location

  if (pathname === ROUTE_ROOT) {
    // navigate(ROUTE_HOME, { replace: true })
    return <Navigate replace to={ROUTE_HOME} />
  }

  return (
    <div className="relative w-screen h-screen">
      <Outlet />
    </div>
  )
}

export default observer(Layout)
