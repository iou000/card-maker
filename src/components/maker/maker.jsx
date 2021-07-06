import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
        const history = useHistory();

        const [cards, setCards] = useState([
            {
                id: '1',
                name: '김 경 섭',
                company: 'Samsung',
                job: 'Software Engineer',
                email: 'iou000@naver.com',
                tel: '010-2792-5361',
                fileName: 'seop',
                fileURL: '/images/samsung.png'
            },
            {
                id: '2',
                name: '곽 건 호',
                company: 'Apple',
                job: 'Hardware Engineer',
                email: 'gun@apple.com',
                tel: '010-1111-1111',
                fileName: 'gwak',
                fileURL: '/images/apple.png',
            },
            {
                id: '3',
                name: '정 상 기',
                company: 'google',
                job: 'Manager',
                email: 'sang@gmail.com',
                tel: '010-2222-2222',
                fileName: 'jung',
                fileURL: '/images/google.png',
            },
    ]);





        const onLogout = () => {
            authService.logout();
            history.push('/');
        }

        
        return (
            <section className={styles.maker}>
                <Header onLogout={onLogout}/>
                    <div className={styles.container}>
                        <Editor cards={cards}/>
                        <Preview cards={cards}/>
                    </div>
                <Footer />


            </section>
        );
};

export default Maker;