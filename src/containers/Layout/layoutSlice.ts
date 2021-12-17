import { createSlice } from "@reduxjs/toolkit"

export interface LayoutState {
  collapsed: boolean
}

// 初始数据
const initialState: LayoutState = {
  collapsed: false
};

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.collapsed = !state.collapsed
    }
  }
})

export const { toggleSidebar } = layoutSlice.actions
export default layoutSlice.reducer
