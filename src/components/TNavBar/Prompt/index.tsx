import ReactDOM from 'react-dom'

const Prompt = ({
  visible = false,
  color,
  children
}: {
  visible?: boolean
  color?: 'default' | 'warn' | 'error' | 'info'
  children?: React.ReactNode
}) => {
  const colorClass = () => {
    switch (color) {
      case 'default':
        return 'bg-gray-400 text-white border-gray-500'
      case 'warn':
        return 'bg-yellow-50 text-red-400 border-red-50'
      case 'error':
        return 'bg-red-500 text-white border-white'
      case 'info':
        return 'bg-blue-200 text-blue-500 '
      default:
        return 'bg-gray-400 text-white border-gray-500'
    }
  }

  return ReactDOM.createPortal(
    <div
      className={`absolute z-max border-b transition duration-75 bottom-full w-full pt-6 pb-3 px-3 ${
        visible ? 'translate-y-full' : 'translate-y-0'
      } ${colorClass()}`}
    >
      {children}
    </div>,
    document.body
  )
}

export default Prompt
