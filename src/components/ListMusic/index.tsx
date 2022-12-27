import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMusic, favMusic, useMusic } from "../../redux/sliceMusics";

export interface List {
  text: string;
  onFavorite: () => void;
  children: ReactNode;
  onDelete: () => void;
}

export const List = () => {
  const musics = useSelector(useMusic);
  const dispatch = useDispatch();
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
    </div>
  );
};
