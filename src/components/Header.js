import React from 'react'
import logoSource from '../assets/images/logo1.png'
import styles from './Header.module.css';
import hamburger from '../assets/images/icon-hamburger.svg'
const Header = () => {

  return (
    <div className={styles.header__container}>

    <header>
        <img src={logoSource} alt="logo" className={styles.logoImage}/>
        <nav>
            <ul>
                <li>
                    <a href='#none'>Crypto taxes</a>
                </li>
                <li>
                    <a  href='#none'>Free Tools</a>
                </li>
                <li>
                    <a  href='#none'>Resource Center</a>
                </li>
            </ul>
            <button className={styles.btn}>
                Get Started
            </button>
            <button className={styles.hamburger}>
            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#000" fill-rule="evenodd"/></svg>
            </button>
        </nav>
    </header>
    </div>
  )
}

export default Header
