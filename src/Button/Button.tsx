import React, { forwardRef } from 'react'

import { clsx } from '../utils'

import { ButtonProps, ButtonRef, defaultProps } from './Button.types'
import './button.scss'

const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ children, kind, size, tier, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx('artio-button', props.className)}
        data-kind={kind}
        data-size={size}
        data-tier={tier}
      >
        {children}
      </button>
    )
  }
)

Button.defaultProps = defaultProps

export default Button
