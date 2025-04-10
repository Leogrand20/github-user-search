import { FC } from 'react'

import { UserStatProps } from '../../types/User'

import styles from './UserStat.module.scss'

export const UserStat: FC<UserStatProps> = ({
  repos,
  followers,
  following,
}) => (
  <div className={styles['userStat']}>
    <div className={styles['info']}>
      <div className={styles['infoTitle']}>Repos</div>
      <div className={styles['infoNumber']}>{repos}</div>
    </div>

    <div className={styles['info']}>
      <div className={styles['infoTitle']}>Followers</div>
      <div className={styles['infoNumber']}>{followers}</div>
    </div>

    <div className={styles['info']}>
      <div className={styles['infoTitle']}>Following</div>
      <div className={styles['infoNumber']}>{following}</div>
    </div>
  </div>
)
