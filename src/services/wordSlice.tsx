import {createSlice, current, nanoid} from "@reduxjs/toolkit";
import {IWord} from "../types";
import {RootState} from "./store";


interface WordState {
    words: IWord[]
}

const initialState = {words: []} as WordState

export const wordSlice = createSlice({
    name: 'words',
    initialState,
    reducers: {
           addToList: (state, action) => {
               const item = Object.assign({key: nanoid()}, action.payload)
               state.words.push(item)
           },
            deleteFromList: (state, action) => {
                const newStateArray = [...current(state.words)]
                const index = newStateArray.indexOf(action.payload)
                state.words.splice(index, 1)
            }
    }
});

export const {
    addToList,
    deleteFromList
} = wordSlice.actions

export const wordSelector = (state: RootState) => state.words

export default wordSlice.reducer