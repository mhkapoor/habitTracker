import React from 'react'
import './button.css'
const Button = ({className,onClick,value}) => {
  return (
    <div className={className}><button onClick={onClick}>{value}</button></div>
  )
}

export default Button