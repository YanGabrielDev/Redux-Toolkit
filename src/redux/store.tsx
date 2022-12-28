import { configureStore } from "@reduxjs/toolkit";
import sliceMusics from "./sliceMusics";
import sliceCout from "./sliceCout";

const store = configureStore({
  reducer: {
    musics: sliceMusics,
    count: sliceCout,
  },
});

export default store;
