import React, { FC, forwardRef } from 'react'
import { clsx } from '../utils'
import { ButtonProps, ButtonRef, StyleProps } from './Button.types'
import './button.css'

const Button: FC<ButtonProps> = forwardRef<ButtonRef, ButtonProps>(
  ({ children, backgroundColor, fontSize, style, ...props }, ref) => {
    const varStyle: StyleProps = { ...style }
    backgroundColor && (varStyle['--uc-background-color'] = backgroundColor)
    fontSize && (varStyle['--uc-font-size'] = `${fontSize}rem`)

    return (
      <button
        ref={ref}
        className={clsx('uc-button', props.className)}
        style={varStyle}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
