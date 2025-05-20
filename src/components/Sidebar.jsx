import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const nav = useNavigate();
  return (
    <nav 
      className="w-[25%] h-full p-2 bg-black text-white hidden lg:flex flex-col gap-2"
      aria-label="Main sidebar navigation"
    >
      {/* Top Navigation */}
      <div className="bg-gray-900 rounded py-5 px-5 flex flex-col gap-5" role="list">
        <div onClick={()=>nav('/')} className='flex items-center gap-4  cursor-pointer'
        >
          <img src={assets.home_icon} alt="Home icon" className="w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div 
          className="flex items-center gap-4 cursor-pointer hover:text-gray-400" 
          role="listitem" 
          tabIndex={0}
          aria-label="Go to Search"
        >
          <img src={assets.search_icon} alt="Search icon" className="w-6" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-gray-900 h-full rounded mt-2 px-5 py-4 flex flex-col gap-4" role="region" aria-label="Your library">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} alt="Library icon" className="w-6" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} alt="Arrow icon" className="w-5" />
            <img src={assets.plus_icon} alt="Plus icon" className="w-5" />
          </div>
        </div>

        {/* Create Playlist Box */}
        <div className="bg-black rounded px-4 py-3 text-white text-sm flex flex-col items-start gap-2">
          <h1 className="font-semibold text-[14px]">Create your first Playlist</h1>
          <p className="text-[13px] font-light text-gray-300">It's easy, we will help you</p>
          <button 
            className="mt-2 px-4 py-1.5 bg-white text-black rounded-full text-[14px] font-medium cursor-pointer hover:bg-gray-200"
            aria-label="Create playlist"
          >
            Create playlist
          </button>
        </div>

        <div className="bg-black rounded px-4 py-3 text-white text-sm flex flex-col items-start gap-2">
          <h1 className="font-semibold text-[14px]">Find some Podcasts to Follow</h1>
          <p className="text-[13px] font-light text-gray-300">we'll keep you update on new episodes</p>
          <button 
            className="mt-2 px-4 py-1.5 bg-white text-black rounded-full text-[14px] font-medium cursor-pointer hover:bg-gray-200"
            aria-label="Browse podcasts"
          >
            Browse Podcasts
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;