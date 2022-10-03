
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from 'react';

import Track from "./Track";
import Player from './Player'
import Control from './Controls';



const MusicPlayer = () => {
    const {activeSong, isActive, isPlaying, currentSongs, currentIndex} = useSelector((state)=>state.player);
    const [repeat, setRepeat] = useState(false);

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
            />
            <Player/>

        </div>
    )
}

export default MusicPlayer;