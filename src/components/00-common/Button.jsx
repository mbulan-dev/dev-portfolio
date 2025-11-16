import React from 'react'
import { Link } from 'react-scroll'
import styles from '../../assets/styles/components/Button.module.css'

const Button = ({ to, className, fSize, textBtn, smooth = true, duration = 700 }) => {
  return (
    <Link
      to={to}
      smooth={smooth}
      duration={duration}
      className={`${styles.btn} ${className || ''}`}
      style={{ fontSize: fSize }}
    >
      {textBtn}
    </Link>
  )
}

export default Button
