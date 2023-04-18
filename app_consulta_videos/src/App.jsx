
import { useState, Suspense, useEffect } from "react";

import './App.css'

import { fetchData } from './utils/fetchData';



//Preparamos el cuerpo de la request
const API_KEY = import.meta.env.VITE_API_KEY
const API_URL_10_PICS = import.meta.env.VITE_API_URL_10_PICS
const API_URL_VIDS_10= import.meta.env.VITE_API_URL_VIDS_10

// console.log(API_URL_10_PICS);

const options = {
  headers : {
      "Content-type": "application/json",
      "Authorization": API_KEY
  }
}



const apiData = fetchData(API_URL_VIDS_10, options);
// console.log("ApiData", apiData);

function App() {
  
  const data = apiData.read();
  const videosArr = data.videos
  console.log( videosArr );

  const [videos, setVideos] = useState(null);

  const handleClose = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  }

  return (

    //!Render as you fetch: hasta que no tengamos los datos, no se renderizará. Evitamos dobles renderizados.
    <div className="container">
      <h1>Fetch like a PRO</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {videosArr?.map( (video) => (
            <li key={video.id}>
              <p>
                {video.user.name}
              </p>
              <img src={video.image} style={{maxWidth: 320 , minHeight: 300}}/>
            </li>
          ) )}
        </ul>
      </Suspense>
      
    </div>
  )
}

export default App

