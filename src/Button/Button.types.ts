import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'small' | 'medium' | 'large'
  kind?: 'contained' | 'outlined' | 'text'
  tier?: 'primary' | 'secondary'
}

export type ButtonRef = HTMLButtonElement

export const defaultProps: ButtonProps = {
  kind: 'contained',
  size: 'medium',
  tier: 'primary',
}
