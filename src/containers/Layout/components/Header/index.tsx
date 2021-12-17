// import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { toggleSidebar } from '../../layoutSlice'

import styles from './index.module.scss'

export default function Header () {
  const dispatch = useDispatch()
  
  function sidebarToggle (ev: any) {
    dispatch(toggleSidebar())
    ev.target.classList.toggle(styles.flip)
    ev.preventDefault()
  }

  return (
    <>
      <a
        href="#!"
        className={styles.togglebar}
        onClick={sidebarToggle}> </a>
    </>
  )
}