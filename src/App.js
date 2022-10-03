import {Routes, Route} from 'react-router-dom'
import './App.css';

import {Discover, AroundYou, ArtistDetails, Search, SongDetails, TopArtists, TopCharts} from '../src/pages'
import MusicPlayer from './components/MusicPlayer';

const App = () => {
  return (
    <div className=' relative flex'>
      <div className="flex-1 h-fit pb-40">
        <Routes>
          <Route path='/' element={<Discover/>}/>
          <Route path='/top-artists' element={<TopArtists/>}/>
          <Route path='/top-charts' element={<TopCharts/>}/>
          <Route path='/around-you' element={<AroundYou/>}/>
          <Route path='/artists/:id' element={<ArtistDetails/>}/>
          <Route path='/songs/:songid' element={<SongDetails/>}/>
          <Route path='/search/:searchTerm' element={<Search/>}/>
        </Routes>
      </div>
      <div className=' fixed h-28 bottom-0 left-0 right-0 flex bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl '>
        <MusicPlayer/>
      </div>
    </div>
  );
}

export default App;
