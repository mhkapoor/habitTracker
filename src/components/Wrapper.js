import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className="container d-flex justify-content-center align-items-center flex-column">{children}</div>
  )
}

export default Wrapper