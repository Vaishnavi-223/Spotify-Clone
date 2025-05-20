import React, { useContext } from 'react';
import { songsData, assets } from "../assets/assets";
import { PlayerContext } from '../Context/PlayerContext';

const Player = () => {
    const { seekBar, seekBg, play, pause, playStatus, track, time,after, before, seekBgClick } = useContext(PlayerContext);
  return (
    <div className="h-[10%] w-full bg-black text-white px-4 flex items-center justify-between">
      
      {/* Left: Song Info */}
      <div className="flex items-center gap-4 w-[30%]">
        <img src={track.image} alt="Song" className="w-12 h-12 rounded" />
        <div>
          <p className="text-sm font-semibold">{track.name}</p>
          <p className="text-xs text-gray-400">{track.desc.slice(0, 16)+ "..."}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
            <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt=""/>
            <img onClick={before} className="w-4 cursor-pointer" src={assets.prev_icon} alt=""/>
            {playStatus ? (
            <img
              onClick={pause}
              className="w-4 cursor-pointer"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-4 cursor-pointer"
              src={assets.play_icon}
              alt=""
            />
          )}
      
            <img onClick={after} className="w-4 cursor-pointer" src={assets.next_icon} alt=""/>
            <img className="w-4 cursor-pointer" src={assets.loop_icon} alt=""/>
        </div>
        <div className="flex items-center gap-4 w-full">
          <p className="text-xs text-gray-300">{time.currentTime.minute}:{time.currentTime.second}</p>
        
            <div ref={seekBg} onClick={seekBgClick}  className="flex-1 bg-gray-500 w-[60vw] max-w-[500px] h-1 rounded-full relative cursor-pointer">
            <div ref={seekBar} className="absolute top-0 left-0 h-1 bg-green-600 rounded-full" style={{ width: "20%" }} />
          </div>
          <p className="text-xs text-gray-300">{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>

      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.play_icon} alt="" />
        <img className="w-4" src={assets.mic_icon} alt="" />
        <img className="w-4" src={assets.queue_icon} alt="" />
        <img className="w-4" src={assets.speaker_icon} alt="" />
        <img className="w-4" src={assets.volume_icon} alt="" />
        <div className="relative w-20 h-1 bg-gray-400 rounded-full">
        <div className="absolute h-1 bg-green-500 rounded-full" style={{ width: "50%" }}></div>
        <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 -translate-y-1/2 left-[50%] -translate-x-1/2"></div>
        </div>

        <img className="w-4" src={assets.mini_player_icon} alt="" />
        <img className="w-4" src={assets.zoom_icon} alt="" />
      </div>
    </div>
  );
};
export default Player;