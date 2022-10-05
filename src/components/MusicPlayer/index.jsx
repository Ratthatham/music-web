
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';

import Track from "./Track";
import Player from './Player'
import Control from './Controls';
import { playPause, nextSong, prevSong } from '../../redux/features/playerSlice';



const MusicPlayer = () => {
    const dispatch = useDispatch();
    const {activeSong, isActive, isPlaying, currentSongs, currentIndex} = useSelector((state)=>state.player);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);

    const handlePlayPause = () => {
        if (!isActive) return;
        
        if(isPlaying){
            dispatch(playPause(false))
        } else {
            dispatch(playPause(true))
        }

    }

    const handleNextSong = () => {
        dispatch(playPause(false));

        if (!shuffle) {
            dispatch(nextSong((currentIndex + 1) % currentSongs.length));
          } else {
            dispatch(nextSong(Math.floor(Math.random() * currentSongs.length)));
          }
    }

    const handlePrevSong = () => {
        dispatch(playPause(false));
        
        if (currentIndex === 0) {
            dispatch(prevSong(currentSongs.length - 1));
        } else if (shuffle) {
            dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
        } else {
            dispatch(prevSong(currentIndex - 1));
        }
    }

    return(
        <div className=' relative sm:px-12 px-8 w-full flex items-center justify-center'>
            <Track 
                activeSong={activeSong}
                isActive={isActive}
                isPlaying={isPlaying}
            />

            <Control 
                repeat={repeat} 
                setRepeat={setRepeat}
                currentSongs={currentSongs}
                handleNextSong={handleNextSong}
                handlePrevSong={handlePrevSong}
                handlePlayPause={handlePlayPause}
                isPlaying={isPlaying}
                setShuffle={setShuffle}
                shuffle={shuffle}
            />
            <Player/>

        </div>
    )
}

export default MusicPlayer;