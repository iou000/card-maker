import React from 'react';
import styles from './header.module.css';

const Header = (props) => {
        

    return (
        
        <header className={styles.header}>

            <img src="/images/logo.png" alt="logo" />
            <h1>Business Card Maker</h1>
            <div className={styles.divider}></div>
        
        
        </header>
    );
};

export default Header;