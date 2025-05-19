import { ReactComponent as CompanyIcon } from '@icons/icon-company.svg'
import { ReactComponent as LocationIcon } from '@icons/icon-location.svg'
import { ReactComponent as TwitterIcon } from '@icons/icon-twitter.svg'
import { ReactComponent as BlogIcon } from '@icons/icon-website.svg'
import { FC } from 'react'

import { InfoItemProps, UserInfoProps } from '../../types/User'
import { InfoItem } from '../InfoItem/InfoItem'
import styles from './UserInfo.module.scss'

export const UserInfo: FC<UserInfoProps> = ({
  blog,
  company,
  location,
  twitter,
}) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
  ]

  return (
    <div className={styles['userInfo']}>
      {items.map((item, index) => (
        <InfoItem key={index} {...item} />
      ))}
    </div>
  )
}
