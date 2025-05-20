import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../Context/PlayerContext'; 

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumDatalocal = albumsData[id];
  const  {playWithId} = useContext(PlayerContext);

  

  return (
    <>
      <Navbar />

      {/* Album Info */}
      <div className='mt-10 flex flex-col md:flex-row items-center md:items-end gap-8 px-6'>
        <img className='w-48 h-48 object-cover rounded' src={albumDatalocal.image} alt={albumDatalocal.name} />
        <div className='text-white'>
          <p className='uppercase text-sm text-gray-400'>Playlist</p>
          <h2 className='text-4xl font-bold mb-2 md:text-6xl'>{albumDatalocal.name}</h2>
          <p className='text-sm text-gray-400 mb-1'>{albumDatalocal.desc}</p>
          <p className='text-sm text-gray-300 mt-2 flex items-center gap-1'>
            <img className='w-5 h-5 inline-block' src={assets.spotify_logo} alt="Spotify Logo" />
            <b className='text-white'>Spotify Clone</b> • 33,62,251 likes • <b>50 Songs</b> • about 2 hr 35 min
          </p>
        </div>
      </div>

      {/* Song Table Header */}
      <div className='grid grid-cols-12 gap-2 mt-10 mb-2 px-6 text-[#a7a7a7] text-sm font-semibold'>
        <div className='col-span-6 flex items-center'><span className='mr-4'>#</span>Title</div>
        <div className='col-span-3'>Album</div>
        <div className='hidden md:block col-span-2'>Date Added</div>
        <div className='col-span-1 flex justify-center'>
          <img className='w-4' src={assets.clock_icon} alt="Duration Icon" />
        </div>
      </div>

      <hr className='border-t border-gray-700 mx-6' />

      {/* Song List */}
      <div className='px-6 overflow-x-auto'>
        {songsData.map((item, index) => (
          <div
            key={index}
            onClick={() => playWithId(item.id)}
            className='grid grid-cols-12 gap-2 p-3 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded-md transition-all'
          >
            <div className='col-span-6 flex items-center gap-4 overflow-hidden'>
              <p className='text-sm min-w-[20px]'>{index + 1}</p>
              <img className='w-10 h-10 object-cover rounded' src={item.image} alt={item.name} />
              <p className='text-white text-sm truncate'>{item.name}</p>
            </div>
            <p className='col-span-3 text-sm truncate'>{albumDatalocal.name}</p>
            <p className='col-span-2 hidden md:block text-sm'>3 days ago</p>
            <p className='col-span-1 text-sm text-center'>{item.duration}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayAlbum;
