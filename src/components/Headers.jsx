import { useEffect } from 'react'
import styles from '../styles/header.module.css'
import clsx from 'clsx'
import scrollEventTrigger from '../hooks/scrollEventTrigger'
import { AiFillGithub } from "react-icons/ai";


const Header = () => {
  useEffect(()=>{
    scrollEventTrigger(styles.header, styles.sticky, 500)
  },[])

  return (
    <nav className={styles.header}>
      <div className={styles.background}></div>
      
      <div className={clsx(styles.navigations, styles.home)}>
        <a href="#">
          Kurisudevu
        </a>
      </div>

      <div className={clsx(styles.navigations, styles.selections)}>
        <a href="#">Home</a>
        <a href="#aboutMe">About</a>
        <a href="#contacts">Contacts</a>
        <a href="#myEmail:~:text=chrismclaind%40gmail.com">Email</a>  
      </div>

      <div className={clsx(styles.navigations, styles.menu)}>
        <a href="https://github.com/christopherlandas" target='_blank'>
          <AiFillGithub size={screen.width >= 768? 45: screen.width >= 480? 39: 36}/>
        </a>
      </div>  
    </nav>
  )
}

export default Header