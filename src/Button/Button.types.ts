import { ButtonHTMLAttributes, CSSProperties } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  fontSize?: number
}

export type ButtonRef = HTMLButtonElement

export interface StyleProps extends CSSProperties {
  '--uc-font-size'?: string
  '--uc-background-color'?: string
}
