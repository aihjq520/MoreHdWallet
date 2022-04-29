import { Routes, Route } from 'react-router-dom'

import { observer } from 'mobx-react'
import Backup from 'pages/backup'
import Mnemonic from 'pages/backup/mnemonic'
import VerifyMnemonic from 'pages/backup/verifyMnemonic'
import CreateWallet from 'pages/create'
import ExportWallet from 'pages/export'
import Home from 'pages/home'
import Layout from 'pages/layout'
import Welcome from 'pages/welcome'

import {
  ROUTE_BACKUP,
  ROUTE_BACKUP_MNEMONIC,
  ROUTE_BACKUP_MNEMONIC_VERIFY,
  ROUTE_CREATE,
  ROUTE_EXPORT,
  ROUTE_HOME,
  ROUTE_ROOT,
  ROUTE_WELCOME
} from './path'

const Routers = () => {
  return (
    <Routes location={location}>
      <Route path={ROUTE_CREATE} element={<CreateWallet />}></Route>
      <Route path={ROUTE_EXPORT} element={<ExportWallet />}></Route>
      <Route path={ROUTE_BACKUP} element={<Backup />}></Route>
      <Route path={ROUTE_BACKUP_MNEMONIC} element={<Mnemonic />}></Route>
      <Route
        path={ROUTE_BACKUP_MNEMONIC_VERIFY}
        element={<VerifyMnemonic />}
      ></Route>
      <Route path={ROUTE_WELCOME} element={<Welcome />}></Route>
      <Route path={ROUTE_ROOT} element={<Layout />}>
        <Route path={ROUTE_HOME} element={<Home />}></Route>
      </Route>
    </Routes>
  )
}

export default observer(Routers)
