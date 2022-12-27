import {createSlice, PayloadAction} from '@reduxjs/toolkit'

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
        },
        favMusic(state, action){
            return state.map(st => st.name === action.payload ? {...st, favorite: !st.favorite} : st)
        },
        deleteMusic(state, action){
            return [
                ...state.slice(0, action.payload),
                ...state.slice(action.payload + 1)
            ]
        }
       
    }
})
export default sliceMusics.reducer

export const {addMusic, favMusic, deleteMusic} = sliceMusics.actions
export const useMusic = (state:any) =>{
    return state.musics as Musics[]
}