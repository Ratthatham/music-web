import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {useGetTopChartsQuery} from '../redux/services/shazamCore'
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import { FreeMode } from 'swiper';



const TopPlay = () => {
    const dispatch = useDispatch();
    const {isActive, isPlaying, activeSong} = useSelector((state)=>state.player)
    const {data, isFetching, isError} = useGetTopChartsQuery();
    const topPlayers = data?.slice(0,5);
    const topTenArtists = data?.slice(0,10);


    
    const TopChartCard = ({song, i, isPlaying, activeSong, data}) => {
        
        const handlePause = () => {
            dispatch(playPause(false))
        }
    
        const handlePlay = () => {
            dispatch(setActiveSong({song, data, i}));
            dispatch(playPause(true))
        }

        return (
            <div className=" w-full flex flex-row items-center hover:bg-[#4c426e] ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2">
                    <h3 className=" font-bold text-base text-white mr-3">{`${i+1}.`}</h3>
                    <div className="flex-1 flex flex-row justify-between items-center">
                        <img src={song?.images?.coverart} alt={song.title}  className=' w-20 h-20 rounded-lg'/>
                    </div>
                    <div className="flex-1 flex flex-col justify-center mx-3">
                        <Link to={`/songs/${song.key}`}>
                            <p className=" text-xl font-bold text-white">{song.title}</p>
                        </Link>
                        <p className=" text-base text-gray-300 mt-1">{song.subtitle}</p>
                    </div>
                    <PlayPause 
                        song={song}
                        handlePlay={handlePlay}
                        handlePause={handlePause}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        size={30}
                    />
            </div>
        )
        }
    
    return (
        <div className=" xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
            <div className=" w-full flex flex-col mt-4">
                <div className=" flex flex-row justify-between item-center text-white">
                    <h2 className=" text-white font-bold text-2xl ">Top Charts</h2>
                    <Link to={'/top-charts'} className='text-white'>
                        <p className=" text-gray-300 text-base cursor-pointer">See more</p>
                    </Link>
                </div>

                <div className=" mt-4 flex flex-col gap-1">
                    {
                        topPlayers?.map((song, i)=>(
                            <TopChartCard 
                                key={song.key}
                                song={song}
                                i={i}
                                data={data}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                            />
                        ))
                    }
                </div>
            </div>

            <div className=" w-full flex flex-col mt-8 ">
                <div className=" flex flex-row justify-between item-center text-white">
                    <h2 className=" text-white font-bold text-2xl ">Top 10 Artists</h2>
                    <Link to={'/top-artists'} className='text-white'>
                        <p className=" text-gray-300 text-base cursor-pointer">See more</p>
                    </Link>
                </div>

                <Swiper
                    slidesPerView="auto"
                    spacebetween={15}
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className=' mt-4'
                >
                    {
                        topTenArtists?.map((song, i)=>(
                            <SwiperSlide 
                                key={song?.key}
                                style={{width: '20%', height: 'auto'}}
                                className=' shadow-lg rounded-full animate-slideright mr-4'
                            > 
                                <Link to={`/artists/${song?.artists[0].adamid}`}>
                                    <img src={song?.images.background} alt='name' className=' rounded-full w-full object-cover'/>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default TopPlay;