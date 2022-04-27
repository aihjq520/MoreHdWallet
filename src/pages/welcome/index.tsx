import { Link } from 'react-router-dom'

import { ROUTE_CREATE, ROUTE_IMPORT } from 'router/path'

const Welcome = () => {
  return (
    <>
      <Link to={ROUTE_CREATE}>创建钱包</Link>
      <Link to={ROUTE_IMPORT}>导入钱包</Link>
    </>
  )
}

export default Welcome
