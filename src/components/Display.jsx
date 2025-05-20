import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from "../assets/assets";

const Display = () => {

    const displayref = useRef();
    const loc = useLocation();
    const isAlbum = loc.pathname.includes("album");
    const albumID = isAlbum?loc.pathname.slice(-1):"";
    const bgclr = albumsData[Number(albumID)].bgColor;

    useEffect(()=>{
      if(isAlbum)
      {
        displayref.current.style.background = `linear-gradient(${bgclr},#121212)`;
      }
      else{
        displayref.current.style.background = "#121212";
      }
     })

  return (
    <div  ref={displayref} className="w-full lg:w-[75%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
