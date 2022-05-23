import React from 'react'

const Alert = ({children}) => {
  return (
    <div className="text-center text-white uppercase p-2 mt-1 bg-red-400">{children}</div>
  )
}

export default Alert