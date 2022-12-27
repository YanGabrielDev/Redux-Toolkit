import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import "./App.css";
import { addMusic, deleteMusic, favMusic, useMusic } from "./redux/sliceMusics";

function App() {
  const [inputValue, setInputValue] = useState<string>();
  const musics = useSelector(useMusic);
  const dispatch = useDispatch();
  const deleteItem = (arr: any, index: number) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };
  return (
    <div>
      {musics.map((music, index) => {
        return (
          <div>
            <span>{music.name}</span>
            <button onClick={() => dispatch(favMusic(music.name))}>
              {music.favorite ? "Desfavoritado" : "Favoritado"}
            </button>
            <button
              onClick={() => {
                dispatch(deleteMusic(index));
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <div>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => dispatch(addMusic(inputValue))}>
          Adicionar música
        </button>
      </div>
    </div>
  );
}

export default App;
