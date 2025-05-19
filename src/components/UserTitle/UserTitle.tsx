import { FC } from 'react'

import { UserTitleProps } from '../../types/User'
import styles from './UserTitle.module.scss'

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export const UserTitle: FC<UserTitleProps> = ({ created, login, name }) => {
  const joinedDate = localDate.format(new Date(created))

  return (
    <div className={styles['userTitle']}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  )
}
