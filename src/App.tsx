import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNoSubstitutionTemplateLiteral } from "typescript";
import "./App.css";
import { AddItem } from "./components/AddItem";
import { List } from "./components/ListMusic";
import { addMusic, deleteMusic, favMusic, useMusic } from "./redux/sliceMusics";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const musics = useSelector(useMusic);
  const dispatch = useDispatch();

  return (
    <div>
      <List />
      <AddItem
        inputValue={inputValue}
        // setInputValue={setInputValue}
        onAdd={dispatch(addMusic(inputValue))}
      />
      {/* <div>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button onClick={() => dispatch(addMusic(inputValue))}>
          Adicionar música
        </button>
      </div> */}
    </div>
  );
}

export default App;
