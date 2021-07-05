import React, { useEffect } from 'react';
import styles from './login.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';
import { useHistory } from 'react-router-dom';


const Login = ({authService}) => {
    const history = useHistory();
    const goToMaker = (userId) => {
        history.push({
            pathname: "/maker",
            state : {id : userId},
        });
    }

    const onLogin = (platform) => {
        authService.login(platform).then(data => goToMaker(data.user.uid))
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            user && goToMaker(user.uid);
        })
    },[]);
    
        
    return (
        <section className={styles.container}>
            <Header />
            <section className={styles.login}>
                <h1 className={styles.message}>Login</h1>
                <ul className={styles.loginBtns}>
                    <li>
                        <button className={`${styles.loginBtn} ${styles.google}`} onClick={() => onLogin('Google')}>Google로 로그인</button>
                    </li>
                    <li>
                        <button className={`${styles.loginBtn} ${styles.facebook}`} onClick={() => onLogin('Facebook')}>Facebook으로 로그인</button>
                    </li>
                    <li>
                        <button className={`${styles.loginBtn} ${styles.github}`} onClick={() => onLogin('Github')}>Github로 로그인</button>
                    </li>
                </ul>
            </section>
            <Footer />
        </section>
    );
};

export default Login;