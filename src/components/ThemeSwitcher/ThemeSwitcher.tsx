import { useState, useEffect } from 'react'

import { ReactComponent as SunIcon } from '@icons/icon-sun.svg'
import { ReactComponent as MoonIcon } from '@icons/icon-moon.svg'

import styles from './ThemeSwitcher.module.scss'

export const ThemeSwitcher = () => {
  const originalTheme = localStorage.getItem('theme')
  const [isDark, setDark] = useState(originalTheme)
  const themeText = isDark === 'dark' ? 'Light' : 'Dark'
  const ThemeIcon = isDark === 'dark' ? SunIcon : MoonIcon

  useEffect(() => {
    if (isDark) {
      document.body.setAttribute('data-theme', isDark)
      localStorage.setItem('theme', isDark)
    }
  }, [isDark])

  return (
    <div
      className={styles['switcher']}
      onClick={() => setDark(isDark === 'light' ? 'dark' : 'light')}
    >
      <span>{themeText}</span>

      <ThemeIcon className={styles['icon']} />
    </div>
  )
}
