import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
        
    const {id, name, company, job, email, tel, fileName, fileURL} = card;

    const onSubmit = (e) => {};

    return (
        <>
        <span className={styles.cardNum}>{`card. ${id}`}</span>
        <li className={styles.editForm}>
        <form className={styles.form}>
            <div className={styles.row1}>
                <input className={styles.input} type="text" name="name" value={name}></input>
                <input className={styles.input} type="text" name="company" value={company}></input>
                <input className={styles.input} type="text" name="job" value={job}></input>
            </div>
            <div className={styles.row2}>
                <input className={styles.input} type="text" name="email" value={email}></input>
                <input className={styles.input} type="text" name="tel" value={tel}></input>
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