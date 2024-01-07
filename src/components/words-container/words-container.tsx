import React from 'react';
import styles from "../main/main.module.css";
import Word from "../word/word";
import {useAppSelector} from "../../services/hooks";
import {wordSelector} from "../../services/wordSlice";

const WordsContainer = function () {

    const {words} = useAppSelector(wordSelector)

    return (
        <div className={styles.wordsContainer}>
            <div className={styles.words}>
                {
                    words!.map((value, index) => {
                        return <Word word={value} key={index} id={value.uid} index={index}/>
                    })
                }
            </div>
        </div>
    );
};

export default WordsContainer;