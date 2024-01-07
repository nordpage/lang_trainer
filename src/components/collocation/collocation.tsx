import React from 'react';
import {ILang} from "../../types";
import styles from "./collocation.module.css"
import DropZone from "./drop-zone";


type Props = {
    type: number,
    lang: ILang
}
export function Collocation({type, lang}: Props) {

    let phrase;
    let correct: string;
  switch (type) {
        case 0:
            phrase = "Važiuoju iš";
            correct = lang.kilmininkas!
            break
        case 1:
            phrase = "Esu";
            correct = lang.vietininkas!
            break
        case 2:
            phrase = "Važiuoju į"
            correct = lang.galininkas!
          break;
    }


    return (
        <div className={styles.phrase}>
            {phrase}<DropZone/>
        </div>
    );
}