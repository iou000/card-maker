import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card, updateCard, deleteCard}) => {
        
    const {id, name, company, job, email, tel, fileName, fileURL} = card;

    const onSubmit = (e) => {
        e.preventDefault();
        deleteCard(card);
    };

    const onChange = (event) => { //요소에 변화가 생겼을때 실행됨.
        updateCard({
            ...card,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <>
        <span className={styles.cardNum}>{`${name}'s card`}</span>
        <li className={styles.editForm}>
        <form className={styles.form}>
            <div className={styles.row1}>
                <input className={styles.input} type="text" name="name" placeholder='name' onChange={onChange}></input>
                <input className={styles.input} type="text" name="company" placeholder='company' onChange={onChange}></input>
                <input className={styles.input} type="text" name="job" placeholder='job' onChange={onChange}></input>
            </div>
            <div className={styles.row2}>
                <input className={styles.input} type="text" name="email" placeholder='email' onChange={onChange}></input>
                <input className={styles.input} type="text" name="tel" placeholder='tel' onChange={onChange}></input>
            </div>
            <div className={styles.btns}>
                <button className={styles.image}>Image</button>
                <button className={styles.delBtn} onClick={onSubmit}>DELETE</button>
            </div>
        </form>
        </li>
        </>
    );
};

export default CardEditForm;