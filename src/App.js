import {Routes, Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {Discover, AroundYou, Search, SongDetails, TopArtists, TopCharts} from '../src/pages'
import { TopPlay, SideBar, MusicPlayer, Searchbar } from './components';
import './App.css';


const App = () => {
  const {activeSong} = useSelector((state)=>state.player);

  return (
    <div className=' relative flex '>
        <SideBar/>
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#272729]">
          <Searchbar/>
        <div className=" px-6 h-[calc(100vh)] overflow-y-scroll flex xl:flex-row  flex-col-reverse">
          <div className=" xl:w-[70vw] sm:w-full h-fit pb-40 ">
              <Routes>
                <Route path='/music-web/' element={<Discover/>}/>
                <Route path='/top-artists' element={<TopArtists/>}/>
                <Route path='/top-charts' element={<TopCharts/>}/>
                <Route path='/around-you' element={<AroundYou/>}/>
                <Route path='/songs/:songid' element={<SongDetails/>}/>
                <Route path='/search/:searchTerm' element={<Search/>}/>
              </Routes>
          </div>
          <div className='xl:sticky relative top-0 h-fit'>
            <TopPlay/>
          </div>
        </div>  
      </div>  
      {
        activeSong.title && (
        <div className=' fixed z-20 h-28 bottom-0 left-0 right-0 flex bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl '>
          <MusicPlayer/>
        </div>)
      }
    </div>
  );
}

export default App;
