import { FC } from 'react'

import { InfoItemProps } from '../../types/User'
import styles from './InfoItem.module.scss'

export const InfoItem: FC<InfoItemProps> = ({ icon, isLink, text }) => {
  const currentText = text || 'Not Available'
  let currentHref = ''

  if (isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`
  }

  return (
    <div
      className={`${styles['infoItem']}${text ? '' : ` ${styles['empty']}`}`}
    >
      {icon}
      <div>
        {isLink && text ? (
          <a
            href={currentHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['link']}
          >
            {currentText}
          </a>
        ) : (
          currentText
        )}
      </div>
    </div>
  )
}
