import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {wordSlice} from "./wordSlice";

export const store = configureStore({
    reducer: {
        words: wordSlice.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;