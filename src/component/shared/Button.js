import React from 'react'
import PropTypes from 'prop-types'


function Button({children, type, isDisabled}) {
  return (
    <button className='bg-lime-500 transition duration-150 ease-in-out ...' type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}
Button.defaultProps = {
    type : 'button',
    isDisabled: false
}

Button.protoType = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool
}
export default Button
