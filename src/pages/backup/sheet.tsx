import { ActionSheet, Button } from 'antd-mobile'
import { CloseOutline } from 'antd-mobile-icons'

const Sheet = ({
  visible = false,
  onClose,
  onAction
}: {
  visible?: boolean
  onClose?: () => void
  onAction?: () => void
}) => {
  return (
    <ActionSheet
      visible={visible}
      closeOnMaskClick={false}
      actions={[]}
      extra={
        <div>
          <CloseOutline onClick={onClose} />
          <div className="px-4 h-40 text-center text-gray-400 bg-white rounded">
            请勿截屏分享和存储，这将可能被第三方恶意软件收集，造成资产损失
          </div>
          <Button block color="primary" onClick={onAction} className="mt-4">
            知道了
          </Button>
        </div>
      }
    />
  )
}

export default Sheet
