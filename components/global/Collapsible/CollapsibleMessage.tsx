'use client'

import { useState } from 'react'
import { useCollapse } from 'react-collapsed'

import styles from './collapsible.module.sass'

export const CollapsibleMessage = () => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div className={styles.collapsible}>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      <section {...getCollapseProps()}>Collapsed content 🙈</section>
    </div>
  )
}