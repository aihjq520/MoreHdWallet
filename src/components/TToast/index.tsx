import { Toast } from 'antd-mobile'

const TToast = {
  successToast: (text: string) => {
    setTimeout(
      () =>
        Toast.show({
          icon: 'success',
          content: text,
          duration: 1500
        }),
      0
    )
  },

  failToast: (text: string) => {
    setTimeout(
      () =>
        Toast.show({
          icon: 'fail',
          content: text,
          duration: 1500
        }),
      0
    )
  },

  normalToast: (text: string) => {
    setTimeout(
      () =>
        Toast.show({
          content: text,
          duration: 1500
        }),
      0
    )
  },

  loadingToast: (text = '加载中…') => {
    Toast.show({
      icon: 'loading',
      content: text,
      maskClickable: false,
      duration: 0
    })
  },

  clearToast: () => {
    Toast.clear()
  }
}
export default TToast
