import { ReactComponent as CompanyIcon } from '@icons/icon-company.svg'
import { ReactComponent as LocationIcon } from '@icons/icon-location.svg'
import { ReactComponent as TwitterIcon } from '@icons/icon-twitter.svg'
import { ReactComponent as BlogIcon } from '@icons/icon-website.svg'

import { InfoItemProps, UserLocal } from '../../types/User'
import { InfoItem } from '../InfoItem/InfoItem'

import styles from './UserInfo.module.scss'

interface UserInfoProps
  extends Pick<UserLocal, 'blog' | 'company' | 'location' | 'twitter'> {}

export const UserInfo = ({
  blog,
  company,
  location,
  twitter,
}: UserInfoProps) => {
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
        <InfoItem {...item} key={index} />
      ))}
    </div>
  )
}
