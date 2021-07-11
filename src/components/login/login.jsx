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
            state : {id : userId}, //사용자의 정보를 전달해줘야 나중에 DB에 저장 할 수 있음.
        });
    }

    const onLogin = (platform) => {
        authService.login(platform).then(data => goToMaker(data.user.uid))
    };

    useEffect(() => { //로그인이 되어있다면 maker컴포넌트로 이동.
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