import { Outlet } from 'react-router-dom'

import { observer } from 'mobx-react'

const Layout = () => {
  return (
    <div>
      <div className="overflow-y-scroll pt-8 pr-20 pl-16 mt-28 ml-72 w-full">
        <Outlet />
      </div>
    </div>
  )
}

export default observer(Layout)
