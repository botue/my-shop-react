
import { configureStore } from "@reduxjs/toolkit"
import layoutReducer from '../containers/Layout/layoutSlice'

export const store = configureStore({
  reducer: layoutReducer
})

export type RootState = ReturnType<typeof store.getState>