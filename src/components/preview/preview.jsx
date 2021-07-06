import React from 'react';
import Card from '../card/card';
import styles from './preview.module.css';

const Preview = ({cards}) => {
    
        return (
            <section className={styles.preview}>
                <h1 className={styles.title}>Preview</h1>
                <ul className={styles.cards}>
                    {
                    cards.map(card => <Card key={card.id} card={card}/>)
                    }
                </ul>
            </section>
        );

};

export default Preview;