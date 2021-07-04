import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
    
    

    return (
        
        <header className={styles.header}>
            {onLogout &&
             (<button className={`${styles.logout}`} onClick={onLogout}>Logout</button>
             )}

            <img src="/images/logo.png" alt="logo" />
            <h1>Business Card Maker</h1>
            <div className={styles.divider}></div>
        
        
        </header>
    );
};

export default Header;