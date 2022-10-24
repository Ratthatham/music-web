import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useGetTopChartsQuery} from '../redux/services/shazamCore'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import { FreeMode } from 'swiper';
import ChartCard from "./ChartCard";



const TopPlay = () => {
    const {isPlaying, activeSong} = useSelector((state)=>state.player)
    const {data} = useGetTopChartsQuery();
    const topPlayers = data?.slice(0,5);
    const topTenArtists = data?.slice(0,10);
    
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
                            <ChartCard 
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
