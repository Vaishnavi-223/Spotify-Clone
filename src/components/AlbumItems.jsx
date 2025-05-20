import React from 'react';
import { useNavigate } from 'react-router-dom'


const AlbumItems = (props) => {

 const nav = useNavigate()
  return (
    <div onClick={()=>nav(`/album/${props.id}`)} className="min-w-[200px] max-w-[300px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-200">
      <img className="rounded w-full object-cover aspect-square" src={props.image} alt="" />
      <p className="font-bold mt-2 mb-1 truncate">{props.name}</p>
      <p className="text-slate-300 text-sm line-clamp-2">{props.desc}</p>
    </div>
  )
}

export default AlbumItems;
