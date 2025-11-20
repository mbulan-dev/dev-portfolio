import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import myLogo from '../../assets/images/myLogo.png';
import styles from '../../assets/styles/components/Navbar.module.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={`${styles.navbar} ${toggle ? styles.expanded : ""}`}>
        <div className={styles.navContainer}>
          <a href="#" target="_self" rel="noreferrer"><img className={styles.logo} src={myLogo} alt="logo" /></a>

          <ul className={`${styles.links} ${toggle ? styles.expandedLinks : ""}`}>
            <li><Link to="work" smooth duration={700}>Work</Link></li>
            <li><Link to="tools" smooth duration={700}>Tools</Link></li>
            <li><Link to="contact" smooth duration={700}>Contact</Link></li>
            <li><a className={styles.resumeBtn} href="temp" target="_blank" rel="noreferrer">Resume</a></li>
          </ul>

          <div className={styles.toggleIcon} onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes size={28} /> : <FaBars size={28} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
