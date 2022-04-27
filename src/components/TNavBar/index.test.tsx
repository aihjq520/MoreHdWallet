import { render } from '@testing-library/react'

import TNavBar from './index'

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => vi.fn()
}))

test('renders match snapshot', () => {
  const { asFragment } = render(<TNavBar title="测试" />)
  expect(asFragment()).matchSnapshot()
})
