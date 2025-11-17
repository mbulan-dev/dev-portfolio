import { Typewriter } from 'react-simple-typewriter'
import buttonStyles from '../../assets/styles/components/Button.module.css'
import styles from '../../assets/styles/components/Hero.module.css'
import Button from '../00-common/Button'
import HeroScroll from './HeroScroll'
import HeroSocials from './HeroSocials'

const HeroIntro = () => {
  return (
    <div className={styles.heroContainer}>
      <p>Hi! My name is</p>
      <h1>Melvin Bulan</h1>
        <div className={styles.titleDesc} >
            I am a {' '}
           <span className={styles.desc}>
            <Typewriter 
                words={['Software Engineer', 'Front-End Developer', 'QA Tester']}
                loop={true}
                cursor
                cursorStyle='<'
                typeSpeed={50}
                deleteSpeed={40}
            /> 
           </span>
          <div className={styles.heroActions}>
            <Button
              to="work"
              className={buttonStyles.heroBtn}
              fSize={21}
              textBtn="View Works"
            />
            <HeroSocials />
          </div>    
            <HeroScroll />
        </div>
        
    </div>
  )
}

export default HeroIntro