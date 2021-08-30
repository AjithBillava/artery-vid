import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
const {REACT_APP_BACKEND_URL} = process.env

export const useAxios = () =>{
    const [videoData,setVideoData] = useState(null)
    console.log(REACT_APP_BACKEND_URL)
    useEffect(() => {
        setTimeout(() => {
          axios
            .get(`${REACT_APP_BACKEND_URL}/videos`)
            .then((response) => {
              setVideoData(response.data.videos);
              console.log(response.data);
            })
          .catch(function(error) {
            console.log(error);
          });
        }, 1000);
      }, []);
      return videoData;

}