import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher'
import styles from './Header.module.scss'

export const Header = () => (
  <div className={styles['header']}>
    <div className={styles['logo']} onClick={() => window.location.reload()}>
      devfinder
    </div>

    <ThemeSwitcher />
  </div>
)
