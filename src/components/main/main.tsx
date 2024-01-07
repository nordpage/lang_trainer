import React, {useEffect, useState} from 'react';
import {ICountry, ILang, IWord} from "../../types";
import {createClient} from "@supabase/supabase-js";
import styles from "./main.module.css"
import Word from "../word/word";
import {Collocation} from "../collocation/collocation";
import {v4 as uuidv4} from 'uuid';
import {useAppDispatch} from "../../services/hooks";
import {addToList} from "../../services/wordSlice";
import WordsContainer from "../words-container/words-container";

const supabase = createClient("https://ximyhtygwfqufgyysbkf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpbXlodHlnd2ZxdWZneXlzYmtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2MjUzMTMsImV4cCI6MjAyMDIwMTMxM30.xjndeHzLXjES5j8sV-ugEupFH0oNxF6BoQK6p6Rs5QQ");

function Main() {
    const dispatch = useAppDispatch();

    const [countries, setCountries] = useState<ILang[]>([]);
    const [words, setWords] = useState<IWord[]>()
    const shuffleLangs = (arr: ILang[]) => [...arr].sort(() => Math.random() - 0.5);
    const shuffleWords = (arr: string[]) => [...arr].sort(() => Math.random() - 0.5);    useEffect(() => {
        getCountries();
    }, []);

    async function getCountries() {
        const { data } = await supabase.from("langs").select();
        const shuffled = shuffleLangs(data!).slice(0,3)
        setCountries(shuffled!);

        const vardininkas = shuffled.flat().map(item => item.vardininkas)
        const galininkas = shuffled.flat().map(item => item.galininkas)
        const kilmininkas = shuffled.flat().map(item => item.kilmininkas)
        const vietininkas = shuffled.flat().map(item => item.vietininkas)
        const arr = [...vardininkas,...galininkas,...kilmininkas,...vietininkas]
         const wordsArr = shuffleWords(arr) as string[]
        const updWords : IWord[] = wordsArr.map(value => {
            const word = {
                uid: uuidv4(),
                word: value
            }
            dispatch(addToList(word))
            return word
        })
        setWords(updWords)
    }





    return (
        <>
            {
                countries.length > 0 ? <div className={styles.container}>
                    <div className={styles.progress}>1/10</div>
                    <div className={styles.cities}>
                        <p className={styles.city}>{countries[0].vardininkas}</p>
                        <p className={styles.city}>{countries[1].vardininkas}</p>
                        <p className={styles.city}>{countries[2].vardininkas}</p>
                    </div>
                    <div className={styles.phrases}>
                        {
                            countries.map((value, index) => {
                                return <Collocation key={index}  lang={value} type={index}/>
                            })
                        }
                    </div>
                    <WordsContainer/>
                <div className={styles.buttons}>
                    <input type="button" value="Next" className={styles.button}/>
                </div>
                </div> : <div className={styles.loading}>Loading...</div>
            }
        </>
    );
}

export default Main;