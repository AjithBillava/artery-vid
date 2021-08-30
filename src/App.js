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
import { CurrentPlaylist } from './components/CurrentPlaylist';
import { Toast } from './components/ToastComponent';
import { useState ,useEffect } from 'react';
import { useData } from './contexts/DataContext';
import { AsideNav } from "./components/Aside_Navigation";
import { Login } from './components/Login';
import { LoaderComponent } from './components/loader';

function App() {
  const [showToast,setShowToast] = useState(false)
  const [showSideNav, setShowSideNav] = useState(true)
  const {loadData,loadUser,state} = useData()
 

  useEffect(() => {
		let isMounted = true;
		if (isMounted) {
      loadData()
      loadUser()
		}
		return () => {
			isMounted = false;
		};
	}, []);
  const {toastMessage} = useData()
  useEffect(()=>{
    const interval=setTimeout(()=>{
      setShowToast(false)
    },1000)
    return () => {
      clearTimeout(interval);
  }
  },[showToast])    
  
  return (
    <div className="App">
      <Navigation setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      {showToast &&  <Toast toastMessage={toastMessage}/>}
      {showSideNav && <AsideNav/>}
      {state.isLoading && <LoaderComponent/>}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:currVideoID" element={<VideoDetails showToast={showToast} setShowToast={setShowToast}/>} />
        <Route path="/history" element={<History/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/liked-videos" element={<LikedVideos/>} />
        <Route path="/saved-videos" element={<SavedVideos/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/playlist-videos" element={<PlayList showToast={showToast} setShowToast={setShowToast}/>} />
        <Route path="/playlist-videos/:selected_playlist_ID" element={<CurrentPlaylist />} />
      </Routes>
    </div>
   
  );
}

export default App;
