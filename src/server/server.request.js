import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

export const useAxios = () =>{
    const [videoData,setVideoData] = useState(null)

    useEffect(() => {
        setTimeout(() => {
          axios
            .get("https://artery-videos-backend.herokuapp.com/videos")
            .then((response) => {
              setVideoData(response.data.homes);
              console.log(response.data);
            })
          .catch(function(error) {
            console.log(error);
          });
        }, 1000);
      }, []);
      return videoData;

}