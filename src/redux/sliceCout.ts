import {createSlice, PayloadAction} from '@reduxjs/toolkit'



const INITIAL_STATE = {count: 1,}
    


const sliceCount = createSlice({
    name: 'Count',
    initialState: INITIAL_STATE,
    reducers: {
        increment(state, action){
            return  {count: action.payload}
        },

       
    }
})
export default sliceCount.reducer

export const {increment} = sliceCount.actions
export const useCount = (state:any) =>{
    return state.count
}