import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';



const Maker = ({FileInput, authService, cardRepository}) => {
        const history = useHistory();

        const historyState = useHistory().location.state;
        const [cards, setCards] = useState({});
        const [userId, setUserId] = useState(historyState && historyState.id);


        const onAdd = () => {
            setCards({...cards, [Date.now()]:{
                id: Date.now(),
                name: '',
                company: '',
                job: '',
                email: '',
                tel: '',
                fileName: null,
                fileURL: null,
            }});
    }

        const onLogout = useCallback(() => {
            authService.logout();
        },[authService]);


        const updateCard = (card) => {
            setCards((cards) => {
                const update = {...cards};
                update[card.id] = card; //[card.id] == 해당 카드의 id == cards의 오브젝트 번호
                return update;
            });
            cardRepository.saveCard(userId,card); //db에 카드정보저장
        }

        const deleteCard = (card) => {
            setCards((cards) => {
                const delCard = {...cards};
                delete delCard[card.id];
                return delCard;
            });
            cardRepository.removeCard(userId,card); //db에서 해당 카드정보 삭제
        }

        useEffect(() => {
            authService.onAuthChange(user => {
                if (user) {
                    setUserId(user.uid);
                }
                else {
                    history.push('/');
                }
            })
        },[authService, history])
        

        useEffect(() => { //maker컴포넌트가 마운트되면  userId의 cards를 받아옴
            if(!userId) {
                return;
            }
            const stopSync = cardRepository.syncCards(userId, cards => {
                setCards(cards);
            });
            //컴포넌트가 언마운트 되었을 때 리턴한 함수 호출(리소스,메모리 등 정리)
            return () => stopSync();
        }, [userId, cardRepository]);



        return (
            <section className={styles.maker}>
                <Header onLogout={onLogout}/>
                    <div className={styles.container}>
                        <Editor 
                            FileInput={FileInput}
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