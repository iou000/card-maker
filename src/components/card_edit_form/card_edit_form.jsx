import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({FileInput ,card, updateCard, deleteCard}) => {
        
    const {name, fileName} = card;

    const onSubmit = (e) => {
        e.preventDefault();
        deleteCard(card);
    };

    const onFileChange = (file) => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        })
    }

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
                <input className={styles.input} type="text" name="name" placeholder='name' onChange={onChange} value={card.name}></input>
                <input className={styles.input} type="text" name="company" placeholder='company' onChange={onChange} value={card.company}></input>
                <input className={styles.input} type="text" name="job" placeholder='job' onChange={onChange} value={card.job}></input>
            </div>
            <div className={styles.row2}>
                <input className={styles.input} type="text" name="email" placeholder='email' onChange={onChange} value={card.email}></input>
                <input className={styles.input} type="text" name="tel" placeholder='tel' onChange={onChange} value={card.tel}></input>
            </div>
            <div className={styles.btns}>
                <div className={styles.image}>
                <FileInput name={fileName} onFileChange={onFileChange} />
                </div>
                <button className={styles.delBtn} onClick={onSubmit}>DELETE</button>
            </div>
        </form>
        </li>
        </>
    );
};

export default CardEditForm;