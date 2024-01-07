import {useDrag, useDrop} from "react-dnd";
import {useCallback, useRef, useState} from "react";
import Word from "../word/word";
import {IDrop, IWord} from "../../types";
import styles from "./collocation.module.css"
import {useAppSelector} from "../../services/hooks";
import {deleteFromList, wordSelector} from "../../services/wordSlice";

type Props = {
    correctWord: string
}
const DropZone = function () {
    const {words} = useAppSelector(wordSelector)
    const ref = useRef<HTMLDivElement>(null)

    const [word, setWord] = useState<IWord>()
    const [{ isHover }, dropRef] = useDrop({
        accept: 'item',
        collect: (monitor) => ({
            isHover: monitor.isOver()
        }),
        drop(item: IDrop) {
            setWord(item.word)
        }
    })


    const renderWord = useCallback((ingredient: IWord, index: number) => {
        return (
            <Word word={ingredient} index={index}/>
        )
    }, [])

    return (
        <div className={styles.drop} ref={dropRef}>{
            word && (
                renderWord(word, 0)
            )
        }</div>
    );


}


export default DropZone