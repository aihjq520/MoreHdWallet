import { screen, waitFor } from '@testing-library/react'

import TToast from '.'

describe('TToast', () => {
  it('TToast show', async () => {
    TToast.successToast('测试successToast')
    await waitFor(() => {
      expect(screen.getByText('测试successToast')).not.toBeNull()
    })

    TToast.failToast('测试failToast')
    await waitFor(() => {
      expect(screen.getByText('测试failToast')).not.toBeNull()
    })

    TToast.normalToast('测试normalToast')
    await waitFor(() => {
      expect(screen.getByText('测试normalToast')).not.toBeNull()
    })

    TToast.loadingToast()
    await waitFor(() => {
      expect(screen.getByText('加载中…')).not.toBeNull()
    })
  })

  it('TToast clear', async () => {
    TToast.loadingToast()
    await waitFor(() => {
      expect(screen.getByText('加载中…')).not.toBeNull()
    })

    TToast.clearToast()
    expect(screen.queryByText('加载中…')).toBeNull()
  })
})
