import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
        

    return (
        <footer className={styles.footer}>
            <div className={styles.divider}></div>
            <p className={styles.title}>
                Make your business card
            </p>
        </footer>
    );
});

export default Footer;