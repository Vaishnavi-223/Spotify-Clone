import React, { useContext } from 'react'
import { PlayerContext } from '../Context/PlayerContext';

const SongItems = (props) => {

    const {playWithId} = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(props.id)}
      className="min-w-[150px] max-w-[180px] p-2 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-200"
    >
      <div className="w-full aspect-square overflow-hidden rounded">
        <img
          className="w-full h-full object-cover"
          src={props.image}
          alt={props.name}
        />
      </div>
      <p className="font-bold mt-2 mb-1 truncate">{props.name}</p>
      <p className="text-slate-200 text-sm line-clamp-2">{props.desc}</p>
    </div>
  );
};

export default SongItems;
