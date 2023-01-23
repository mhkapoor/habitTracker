import { createSlice } from '@reduxjs/toolkit'

// redux store for storing states
const habitSlice = createSlice({
  name: "location",
    initialState: {
        list: [],
        week:{}
    },
    reducers: {
        save: (state, param) => {
            const { payload } = param;
            state.list = [...state.list, payload];
        },
        weekSelect: (state,param) =>{
          const { payload } = param;
          state.week = payload;
        }
    }
})

export const { save ,weekSelect} = habitSlice.actions
export default habitSlice.reducer