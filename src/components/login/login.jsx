import React from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';


const Login = ({authService}) => {
    
        
    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.login}>
                <h1 className={styles.message}>Login</h1>
                <ul className={styles.loginBtns}>
                    <li>
                        <button className={`${styles.loginBtn} ${styles.google}`} onClick={() => authService.login('Google')}>Google로 로그인</button>
                    </li>
                    <li>
                        <button className={`${styles.loginBtn} ${styles.github}`} onClick={() => authService.login('Github')}>Github로 로그인</button>
                    </li>
                </ul>
            </section>
            <div className={styles.divider}></div>
            
            <Footer />
        </section>
    );
};

export default Login;