import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';



let cardNum = 4;
const Maker = ({authService}) => {
        const history = useHistory();

        const [cards, setCards] = useState({
            1: {
                id: 1,
                name: '김 경 섭',
                company: 'Samsung',
                job: 'Software Engineer',
                email: 'iou000@naver.com',
                tel: '010-2792-5361',
                fileName: 'seop',
                fileURL: '/images/samsung.png'
            },

            2: {
                id: 2,
                name: '곽 건 호',
                company: 'Apple',
                job: 'Hardware Engineer',
                email: 'gun@apple.com',
                tel: '010-1111-1111',
                fileName: 'gwak',
                fileURL: '/images/apple.png',
            },

            3: {
                id: 3,
                name: '정 상 기',
                company: 'google',
                job: 'Manager',
                email: 'sang@gmail.com',
                tel: '010-2222-2222',
                fileName: 'jung',
                fileURL: '/images/google.png',
            },
            
        });


        const onAdd = () => {
            setCards({...cards, [cardNum]:{
                id: cardNum,
                name: 'name',
                company: 'company',
                job: 'job',
                email: 'email',
                tel: 'tel',
                fileName: null,
                fileURL: null,
            }})
        cardNum++;
    }

        const onLogout = () => {
            authService.logout();
            history.push('/');
        }


        const updateCard = (card) => {
            setCards((cards) => {
                const update = {...cards};
                update[card.id] = card; //[card.id] == 해당 카드의 id == cards의 오브젝트 번호
                return update;
            })
        }

        const deleteCard = (card) => {
            setCards((cards) => {
                const delCard = {...cards};
                delete delCard[card.id];
                return delCard;
            })
        }
        
        return (
            <section className={styles.maker}>
                <Header onLogout={onLogout}/>
                    <div className={styles.container}>
                        <Editor 
                            cards={cards} 
                            onAdd={onAdd} 
                            updateCard={updateCard} 
                            deleteCard={deleteCard}
                        />
                        <Preview cards={cards}/>
                    </div>
                <Footer />


            </section>
        );
};

export default Maker;