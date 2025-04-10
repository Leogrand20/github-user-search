import { FC } from 'react'

import { UserCardProps } from '../../types/User'

import { UserInfo } from '../UserInfo/UserInfo'
import { UserStat } from '../UserStat/UserStat'
import { UserTitle } from '../UserTitle/UserTitle'

import styles from './UserCard.module.scss'

export const UserCard: FC<UserCardProps> = (props) => {
  return (
    <div className={styles['userCard']}>
      <img src={props.avatar} alt={props.login} className={styles['avatar']} />

      <UserTitle
        created={props.created}
        login={props.login}
        name={props.name}
      />

      <p
        className={`${styles['bio']}${props.bio ? '' : ` ${styles['empty']}`}`}
      >
        {props.bio || 'This profile has no bio'}
      </p>

      <UserStat
        repos={props.repos}
        followers={props.followers}
        following={props.following}
      />

      <UserInfo
        blog={props.blog}
        company={props.company}
        location={props.location}
        twitter={props.twitter}
      />
    </div>
  )
}
