import {useDrop} from "react-dnd";
import {useCallback, useState} from "react";
import Word from "../word/word";
import {IDrop, IWord} from "../../types";
import styles from "./collocation.module.css"
import {useAppSelector} from "../../services/hooks";
import {wordSelector} from "../../services/wordSlice";

type Props = {
    correctWord: string
}
const DropZone = function () {
    const {words} = useAppSelector(wordSelector)

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
            <div>{ingredient.word}</div>
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