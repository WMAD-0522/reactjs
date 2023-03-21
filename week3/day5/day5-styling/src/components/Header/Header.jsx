import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  console.log(styles);
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.list}>
        <li><a href="#discover">Discover</a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#register">Register</a></li>
      </ul>
    </nav>
  )
}

export default Header