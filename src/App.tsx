import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { AddItem } from "./components/AddItem";
import { List } from "./components/ListMusic";
import { useCount, increment } from "./redux/sliceCout";
import { Counter } from "./components/Count";

function App() {
  const Count = useSelector(useCount);
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(0);

  const plus = async () => {
    await setCount(count + 1);
    await dispatch(increment(count));
    localStorage.setItem("count", JSON.stringify(count));
  };
  const saveCount = localStorage.getItem("count");
  return (
    <div>
      <List />
      <AddItem />
      <Counter
        count={Count.count}
        countState={count}
        dispatch={dispatch}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
