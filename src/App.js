import {Routes, Route} from 'react-router-dom'
import './App.css';

import {Discover, AroundYou, ArtistDetails, Search, SongDetails, TopArtists, TopCharts} from '../src/pages'

const App = () => {
  return (
    <div>
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
  );
}

export default App;
