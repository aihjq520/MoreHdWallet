import { Routes, Route } from 'react-router-dom'

import { observer } from 'mobx-react'
import CreateWallet from 'pages/create'
import ExportWallet from 'pages/export'
import Layout from 'pages/layout'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route path="/create" element={<CreateWallet />}></Route>
      <Route path="/export" element={<ExportWallet />}></Route>
    </Routes>
  )
}

export default observer(Routers)
