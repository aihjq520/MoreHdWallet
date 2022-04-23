import { useEffect } from 'react'

import AccountStore from 'db/account'
import { observer } from 'mobx-react'
import Routers from 'router'

function App() {
  useEffect(() => {
    AccountStore.init()
  }, [])
  return (
    <>
      <Routers />
    </>
  )
}

export default observer(App)
