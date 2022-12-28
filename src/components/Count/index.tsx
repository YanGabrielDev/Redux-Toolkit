import { Dispatch } from "@reduxjs/toolkit";

interface Count {
  count: number;
  countState: number;
  dispatch: any;
  setCount: (value: React.SetStateAction<number>) => void;
  // increment: any;
}
export const Counter = ({ count, countState, dispatch, setCount }: Count) => {
  const plus = async () => {
    await setCount(countState + 1);
    await dispatch;
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => plus()}>Plus</button>
    </div>
  );
};
