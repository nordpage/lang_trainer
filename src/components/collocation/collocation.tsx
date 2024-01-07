import React from 'react';
import {ILang} from "../../types";
import styles from "./collocation.module.css"


type Props = {
    type: number,
    lang: ILang
}
export function Collocation({type, lang}: Props) {

    let phrase;
  switch (type) {
        case 0:
            phrase = "Važiuoju iš";
            break
        case 1:
            phrase = "Esu";
            break
        case 2:
            phrase = "Važiuoju į"
          break;
    }


    return (
        <div className={styles.phrase}>
            {phrase}<div className={styles.drop}></div>
        </div>
    );
}