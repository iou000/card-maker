import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const onButtonClick = (e) => { //button을 클릭하면 input을 클릭한 것과 같음
        e.preventDefault();
        inputRef.current.click();
    }

    const onChange = async (event) => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]); //input에서 선택한 파일의 정보를 클라우디너리에 보내는거임ㅋ
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
    }


    return (
        <div className={styles.container}>
            <input
                ref={inputRef}
                className={styles.input}
                type="file"
                accept="image/*"
                name="file" 
                onChange={onChange}
                />
            {!loading && <button 
                            className={`${styles.button} ${name && styles.pink}`}
                            onClick={onButtonClick}>{name || 'No Image'}
                        </button>
            }
            {loading && <div className={styles.loading}></div>}
        </div>
    
    );
}
export default ImageFileInput;