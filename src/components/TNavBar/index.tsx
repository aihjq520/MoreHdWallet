import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NavBar } from 'antd-mobile'

type ColorType = 'default' | 'theme'

const TNavBar = ({
  title,
  height = 12,
  hasBack = true,
  color = 'default',
  right
}: {
  title?: string
  height?: number
  hasBack?: boolean
  color?: ColorType
  right?: React.ReactNode
}) => {
  const navigate = useNavigate()

  const isDefaultColor = color === 'default'
  return (
    <NavBar
      style={{
        '--height': `${height * 0.25}rem`
      }}
      className={`fixed z-50 w-screen ${
        isDefaultColor ? 'bg-white' : 'bg-theme text-white'
      }`}
      backArrow={hasBack}
      onBack={() => navigate(-1)}
      right={right}
    >
      {title}
    </NavBar>
  )
}

export default TNavBar
