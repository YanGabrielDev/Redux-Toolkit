import {configureStore} from '@reduxjs/toolkit'
import sliceMusics from './sliceMusics';

const store = configureStore({
    reducer:{
        musics: sliceMusics
    }
})

export default store;