import { Dispatch } from "@reduxjs/toolkit";

interface AddItem {
  setInputValue?: (value: React.SetStateAction<string>) => void;
  inputValue: string;
  onAdd: any;
}
export const AddItem = ({ setInputValue, inputValue, onAdd }: AddItem) => {
  return (
    <div>
      {/* <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      /> */}
      {/* <button onClick={() => onAdd}>Adicionar música</button> */}
    </div>
  );
};
