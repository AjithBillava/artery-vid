import './App.css';
import {Home} from "./components/Home"
import {Navigation} from "./components/Navigation"
import {Route,Routes} from "react-router-dom"
import {History} from "./components/History"
import {Library} from "./components/Library"
import { VideoDetails } from './components/VideoDetails';
import {LikedVideos} from "./components/LikedVideos"
import {SavedVideos} from "./components/SavedVideo";
import { PlayList } from './components/Playlist';
function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:videoID" element={<VideoDetails/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/liked-videos" element={<LikedVideos/>} />
        <Route path="/saved-videos" element={<SavedVideos/>} />
        <Route path="/playlist-videos" element={<PlayList/>} />
      </Routes>
    </div>
   
  );
}

export default App;
