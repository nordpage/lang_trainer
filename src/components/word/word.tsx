import React from 'react';
import styles from './word.module.css'

type Props = {
    word: string
}
function Word({word}: Props) {
    return (
        <div className={styles.word}>{word}</div>
    );
}

export default Word;