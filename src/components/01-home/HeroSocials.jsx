import { FiCodepen, FiDribbble, FiGithub, FiLinkedin } from "react-icons/fi";
import styles from '../../assets/styles/components/Hero.module.css';

const HeroSocials = () => {
 
  return (
   <div className={styles.sideWrapper}>
        <span className={styles.icons}>
            <a href="https://github.com/mbulan-dev" target="_blank" rel="noreferrer"><FiGithub size={22}/></a>
        </span>
        <span className={styles.icons}>
            <a href="https://www.linkedin.com/in/melvin-bulan-335987220/" target="_blank" rel="noreferrer"><FiLinkedin size={22} /></a>
        </span>
        <span className={styles.icons}>
            <a href="https://codepen.io/collection/myOQMa" target="_blank" rel="noreferrer"><FiCodepen size={22} /></a>
        </span>
        <span className={styles.icons}>
            <a href="https://dribbble.com/melvinbulan" target="_blank" rel="noreferrer"><FiDribbble size={22} /></a>
        </span>
    </div>
  )
}

export default HeroSocials