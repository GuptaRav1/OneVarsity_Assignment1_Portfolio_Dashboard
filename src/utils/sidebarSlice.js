import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: true,
  isMobileOpen: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen
    },
    toggleMobileSidebar: (state) => {
      state.isMobileOpen = !state.isMobileOpen
    },
    closeMobileSidebar: (state) => {
      state.isMobileOpen = false
    },
    setSidebarOpen: (state, action) => {
      state.isOpen = action.payload
    },
  },
})

export const { 
  toggleSidebar, 
  toggleMobileSidebar, 
  closeMobileSidebar, 
  setSidebarOpen 
} = sidebarSlice.actions
export default sidebarSlice.reducer