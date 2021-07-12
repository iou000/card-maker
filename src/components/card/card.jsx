import React, { memo } from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png'
const Card = memo(({card}) => {
            
    const {name, company, job, email, tel, fileURL} = card;

    const url = fileURL || DEFAULT_IMAGE;

    return (
        <li className={styles.card}>
            <img className={styles.avatar} src={url} alt="profile" />
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <span className={styles.team}>
                <p className={styles.company}>{`${company} / ${job} `}</p>
                </span>
                <p className={styles.email}>{`E-mail. ${email}`}</p>
                <p className={styles.tel}>{`Tel. ${tel}`}</p>
            </div>
        </li>

    );
});

export default Card;