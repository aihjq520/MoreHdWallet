import { useMemo, useState } from 'react'

import { Button, Form, Input } from 'antd-mobile'
import { FormItemProps } from 'antd-mobile/es/components/form'
import TNavBar from 'components/TNavBar'

import useCreateHooks from './hooks'

const CreateWallet = () => {
  const { create, mnemonic } = useCreateHooks()
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

  const value = form.getFieldsValue()

  const onSubmit = () => {
    create(value.password, value.name)
  }

  const rules: {
    [key in keyof IForm]?: FormItemProps['rules']
  } = {
    name: [{ required: true, message: '请输入身份钱包' }],
    password: [{ required: true, message: '请输入钱包密码' }],
    againPwd: [
      ({ getFieldValue }) => ({
        validator: (_, v, c) => {
          if (!v || v !== getFieldValue('password')) {
            c('两次输入密码不一致')
            return
          }
          return Promise.resolve()
        },
        validateTrigger: 'change'
      })
    ]
  }

  rules
  return (
    <>
      <TNavBar></TNavBar>
      <div className=" pt-12 w-screen h-screen">
        <div className="px-8 pt-2 text-lg font-semibold">创建身份钱包</div>
        <div className="px-8 pt-1 text-gray-400">
          你将拥有身份下的多链钱包，比如 ETH、BTC、COSMOS、EOS...
        </div>
        <Form
          form={form}
          mode="card"
          className="px-4 pt-2"
          initialValues={initForm}
          onFinish={onSubmit}
          footer={
            <Button block color="primary" size="large" type="submit">
              创建
            </Button>
          }
        >
          <Form.Item
            name="name"
            rules={rules.name}
            className="bg-gray-50 rounded-xl border"
          >
            <Input placeholder="身份名" autoComplete="new-password" />
          </Form.Item>
          <Form.Header />
          <Form.Item
            name="password"
            rules={rules.password}
            className="bg-gray-50 rounded-xl border"
          >
            <Input placeholder="密码" type="password" />
          </Form.Item>
          <Form.Header />
          <Form.Item
            name="againPwd"
            rules={rules.againPwd}
            className="bg-gray-50 rounded-xl border"
          >
            <Input placeholder="重复输入密码" type="password" />
          </Form.Item>
          <Form.Header />
          <Form.Item name="pwdInfo" className="bg-gray-50 rounded-xl border">
            <Input placeholder="密码提示（可选）" type="password" />
          </Form.Item>
        </Form>
        <div>选择开启币种：FIL</div>
        {mnemonic && <div>你的助记是: {mnemonic}</div>}
      </div>
    </>
  )
}

export default CreateWallet
