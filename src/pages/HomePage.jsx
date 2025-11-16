import React from 'react'
import styles from '../assets/styles/components/Hero.module.css'
import HeroIntro from '../components/01-home/HeroIntro'

const HomePage = () => {
  return (
    <div className = {styles.heroWrapper}>
      <HeroIntro />
    </div>
  )
}

export default HomePage