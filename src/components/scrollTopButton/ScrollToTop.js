import React, { useState, useEffect } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import './scrollBtn.css'

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
    <div clasName="top">
      {" "}
      {showScrollBtn && (
        <BsArrowUp
          className="scroll-icon"
          onClick={scrollTop}
        />
      )}
      {" "}
    </div>
  )
}