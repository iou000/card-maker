import React, { useEffect, useState } from 'react';
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

        const onLogout = () => {
            authService.logout();
            history.push('/');
        }


        const updateCard = (card) => {
            setCards((cards) => {
                const update = {...cards};
                update[card.id] = card; //[card.id] == 해당 카드의 id == cards의 오브젝트 번호
                return update;
            });
            cardRepository.saveCard(userId,card);
        }

        const deleteCard = (card) => {
            setCards((cards) => {
                const delCard = {...cards};
                delete delCard[card.id];
                return delCard;
            });
            cardRepository.removeCard(userId,card);
        }
        

        useEffect(() => {
            if(!userId) {
                return;
            }
            cardRepository.syncCards(userId, cards => {
                setCards(cards);
            });
        }, [userId]);



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