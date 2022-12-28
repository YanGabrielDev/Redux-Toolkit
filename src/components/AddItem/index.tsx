import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMusic, useMusic } from "../../redux/sliceMusics";

interface AddItem {
  setInputValue?: (value: React.SetStateAction<string>) => void;
  inputValue: string;
  onAdd: any;
}
export const AddItem = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const musics = useSelector(useMusic);
  const dispatch = useDispatch();
  return (
    <div>
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
};
