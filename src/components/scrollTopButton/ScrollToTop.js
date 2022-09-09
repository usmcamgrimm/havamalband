import React, { useState, useEffect } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import styles from './scrollBtn.module.css'

export default function ScrollToTop () {
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true)
      } else {
        setShowScrollBtn(false)
      }
    })
  }, [])

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className={styles.top}>
      {" "}
      {showScrollBtn && (
        <BsArrowUp
          className={styles.scrollIcon}
          onClick={scrollTop}
        />
      )}
      {" "}
    </div>
  )
}