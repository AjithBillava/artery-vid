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
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from 'react';
import { useData } from './contexts/DataContext';
import { AsideNav } from "./components/Aside_Navigation";
import { Login } from './components/Login';
import { LoaderComponent } from './components/loader';
import { Register } from './components/Register';
import { PrivateRoute } from './components/private route/PrivateRoute';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const {state:{showSideNav}} = useData()
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
     

  toast.configure()
  return (
    <div className="App">
      <Navigation/>
      <div className="relative-box">
      <ToastContainer/>
        {showSideNav && <AsideNav/>}
        {state.isLoading && <LoaderComponent/>}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:currVideoID" element={<VideoDetails />} />
          <PrivateRoute path="/history" element={<History/>} />
          <PrivateRoute path="/library" element={<Library/>} />
          <PrivateRoute path="/liked-videos" element={<LikedVideos/>} />
          <PrivateRoute path="/saved-videos" element={<SavedVideos/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <PrivateRoute path="/playlist-videos" element={<PlayList/>} />
          <PrivateRoute path="/playlist-videos/:selected_playlist_ID" element={<CurrentPlaylist />} />
        </Routes>
      </div>
    </div>
   
  );
}

export default App;
