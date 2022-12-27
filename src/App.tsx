import React from 'react';
import {useSelector} from 'react-redux'
import './App.css';
import { useMusic } from './redux/sliceMusics';

function App() {
  const musics = useSelector(useMusic)

  return (
    <div>
      {musics.map((music) => {
        return(
          <li>{music.name}</li>
        )
      })}
    </div>
  );
}

export default App;
