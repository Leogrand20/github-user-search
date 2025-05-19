import { ReactComponent as MoonIcon } from '@icons/icon-moon.svg'
import { ReactComponent as SunIcon } from '@icons/icon-sun.svg'
import { FC, useEffect, useState } from 'react'

import styles from './ThemeSwitcher.module.scss'

export const ThemeSwitcher: FC = () => {
  const originalTheme: string = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState<string | null>(originalTheme)
  const themeText = theme === 'dark' ? 'Light' : 'Dark'
  const ThemeIcon = theme === 'dark' ? SunIcon : MoonIcon

  useEffect(() => {
    if (theme) {
      document.body.setAttribute(
        'data-theme',
        theme === 'dark' ? 'dark' : 'light'
      )
      localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <div
      className={styles['switcher']}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <span>{themeText}</span>

      <ThemeIcon className={styles['icon']} />
    </div>
  )
}
