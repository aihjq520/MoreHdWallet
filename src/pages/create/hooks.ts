import { useNavigate } from 'react-router-dom'

import { Form } from 'antd-mobile'
import TToast from 'components/TToast'
import { db } from 'db/storage'
import { useLiveQuery } from 'dexie-react-hooks'
import { ROUTE_BACKUP } from 'router/path'
import WalletApi from 'wallet'

const useCreateHooks = () => {
  const useGetKeyStore = () => {
    const keyArr = useLiveQuery(() => db.keyStore.toArray())
    if (keyArr && keyArr?.length > 0 && keyArr[0]) {
      console.log(keyArr[0])
      return keyArr[0]
    }
    return null
  }

  useGetKeyStore()

  const navigate = useNavigate()
  interface IForm {
    name: string
    password: string
    againPwd: string
  }
  const initForm: IForm = {
    name: '',
    password: '',
    againPwd: ''
  }

  const [form] = Form.useForm<IForm>()

  const onSubmit = async () => {
    const value = form.getFieldsValue()
    const mnemonic = await WalletApi.create(value.password, value.name)
    TToast.successToast('创建成功')
    setTimeout(() => {
      navigate(ROUTE_BACKUP, { state: { mnemonic } })
    }, 1500)
  }

  return {
    form,
    initForm,
    onSubmit
  }
}

export default useCreateHooks
