import { FC } from 'react'

import { ButtonProps } from '../../types/User'
import styles from './Button.module.scss'

export const Button: FC<ButtonProps> = ({ children, onClick }) => (
  <button className={styles['button']} onClick={onClick}>
    {children}
  </button>
)
