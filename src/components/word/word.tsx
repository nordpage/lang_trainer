import React, {useRef} from 'react';
import styles from './word.module.css'
import {DropTargetMonitor, useDrag, useDrop} from "react-dnd";
import {IWord} from "../../types";

type Props = {
    id?: string,
    word: IWord,
    index: number,
}
const Word = function ({id, word, index}: Props) {

    const ref = useRef<HTMLDivElement>(null)
    const [{ handlerId }, dropRef] = useDrop({
        accept: "item",
        collect(monitor: DropTargetMonitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: {index: number, type: string, id: string}, monitor: DropTargetMonitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()

            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

            const clientOffset = monitor.getClientOffset()

            const hoverClientY = clientOffset!.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            item.index = hoverIndex
        }
    })
    const [{ isDragging }, dragRef] = useDrag({
        type: "item",
        item: {id, word, index},
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const opacity = isDragging ? 0 : 1
    const cursor = isDragging ? "move" : "none"

    dragRef(dropRef(ref))


    return (
        <div className={`${styles.word} ${opacity} ${cursor}`} ref={ref}>{word.word}</div>
    );
}

export default Word;