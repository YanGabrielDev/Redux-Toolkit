import {createSlice} from '@reduxjs/toolkit'

interface Musics{
    name: string,
    favorite: boolean
}

const INITIAL_STATE: Musics[] = [
    {name: 'Burn My Misery', favorite: false},
    {name: 'The Heritic Anthem', favorite: false},
    {name: 'Be Quiet And Drive', favorite: false},
    {name: 'sic', favorite: false},
]

const sliceMusics = createSlice({
    name: ' Music',
    initialState: INITIAL_STATE,
    reducers: {
        addMusic(state, action){
            return [...state, {name: action.payload, favorite: false}]
        }
    }
})
export default sliceMusics.reducer

export const {addMusic} = sliceMusics.actions
export const useMusic = (state:any) =>{
    return state.musics as Musics[]
}