import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({cards, onAdd, updateCard, deleteCard}) => {
        
        

        return (
            <section className={styles.editor}>
                <h1 className={styles.title}>Editor</h1>
                <ul className={styles.cards}>
                    {
                        //Object.keys() : 오브젝트의 key들을 배열로 반환해줌.
                    Object.keys(cards).map(key => <CardEditForm key={key} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard}/>)
                    }
                    <img className={styles.addImgBtn} 
                        src="/images/plus.png" 
                        alt="addImgBtn" 
                        onClick={(onAdd)}
                    />
                </ul>
            </section>

        );

};

export default Editor;