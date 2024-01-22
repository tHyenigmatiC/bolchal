'use client'

import { useState } from 'react'
import { useCollapse } from 'react-collapsed'

import styles from './collapsible.module.sass'
import Image from 'next/image'

import { IDirectMessage, IDirectMessageList, MockDirectMessages } from './mock'

export const CollapsibleMessage = () => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className={styles.collapsible}>
      <div
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className={styles.header}
      >
        <div className={`${styles.row} ${styles.wide}`}>
            <p>Messages</p>
            <div className={`${styles.row} ${styles.end}`}>
                {isExpanded ? 
                    <Image 
                        src='/d-arrow-down.svg'
                        alt='Arrow Facing Upwards'
                        height={28}
                        width={28}
                        className={styles.arrow}
                    /> 
                    : 
                    <Image 
                        src='/d-arrow-up.svg'
                        alt='Arrow Facing Downwards'
                        height={28}
                        width={28}
                        className={styles.arrow}
                    />
                }
            </div>

        </div>
      </div>
      <section {...getCollapseProps()} className={styles.content}>
                <DirectMessageList {...MockDirectMessages} />
      </section>
    </div>
  )
}


const DirectMessageList = ( {data}: IDirectMessageList) => {
    return (
        <div className={`${styles.column} ${styles.far}`}>
            {
                data.map((followData: IDirectMessage) => (
                    <DirectMessage key={followData.username} {...followData} />
                ))
            }
        </div>
    )
}

const DirectMessage = ({ image, name, username, message, date} : IDirectMessage) => {
    return (
        <div className={`${styles.row} ${styles.fullwidth}`}>
            <div className={styles.row}>
                <Image
                    src={image}
                    alt={'Profile picture of '+name}
                    height={48}
                    width={48}
                    className={styles.circle}
                />
                <div className={`${styles.column} ${styles.near}`}>
                    <div className={styles.row}>
                        <p className={styles.text}>{name}</p>
                        <p className={`${styles.text} ${styles.small}`}>@{username}</p>
                    </div>
                    <p className={`${styles.text} ${styles.small}`}>{message}</p>
                </div>
            </div>
            <p className={`${styles.text} ${styles.tiny}`}>{date}</p>
        </div>
    )
}