import { Routes, Route } from 'react-router-dom'

import { observer } from 'mobx-react'
import AppendCoin from 'pages/appendCoin'
import Backup from 'pages/backup'
import Mnemonic from 'pages/backup/mnemonic'
import VerifyMnemonic from 'pages/backup/verifyMnemonic'
import CreateWallet from 'pages/create'
import ExportWallet from 'pages/export'
import Home from 'pages/home'
import ImportWallet from 'pages/import'
import Layout from 'pages/layout'
import Welcome from 'pages/welcome'

import {
  ROUTE_ROOT,
  ROUTE_WELCOME,
  ROUTE_HOME,
  ROUTE_CREATE_WALLET,
  ROUTE_IMPORT_WALLET,
  ROUTE_EXPORT,
  ROUTE_BACKUP,
  ROUTE_BACKUP_MNEMONIC,
  ROUTE_BACKUP_MNEMONIC_VERIFY,
  ROUTE_APPEND_COIN
} from './path'

const Routers = () => {
  return (
    <Routes location={location}>
      <Route path={ROUTE_CREATE_WALLET} element={<CreateWallet />}></Route>
      <Route path={ROUTE_IMPORT_WALLET} element={<ImportWallet />}></Route>
      <Route path={ROUTE_WELCOME} element={<Welcome />}></Route>
      <Route path={ROUTE_ROOT} element={<Layout />}>
        <Route path={ROUTE_HOME} element={<Home />}></Route>
        <Route path={ROUTE_EXPORT} element={<ExportWallet />}></Route>
        <Route path={ROUTE_BACKUP} element={<Backup />}></Route>
        <Route path={ROUTE_BACKUP_MNEMONIC} element={<Mnemonic />}></Route>
        <Route path={ROUTE_APPEND_COIN} element={<AppendCoin />}></Route>
        <Route
          path={ROUTE_BACKUP_MNEMONIC_VERIFY}
          element={<VerifyMnemonic />}
        ></Route>
      </Route>
    </Routes>
  )
}

export default observer(Routers)
