
import { useState, Suspense, useEffect } from "react";
import ReactPlayer from 'react-player'

import './App.css'

import { fetchData } from './utils/fetchData';



//Preparamos el cuerpo de la request
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL_10_PICS = import.meta.env.VITE_API_URL_10_PICS;
const API_URL_VIDS_10= import.meta.env.VITE_API_URL_VIDS_10;

// console.log(API_URL_10_PICS);

const options = {
  headers : {
      "Content-type": "application/json",
      "Authorization": API_KEY
  }
}


const handleRequest = () => {
  const apiData = fetchData(API_URL_VIDS_10, options);
  return apiData;
}

const apiData = fetchData(API_URL_VIDS_10, options);
// console.log("ApiData", apiData);

function App() {
  
  const data = apiData.read();
  const videosArr = data.videos


  return (

    <>
    
      <div className="container-fluid">
        <div className="row mb-2">
          <nav className='container-fluid mx-0 w-100'>
            <h1 
              className='bg bg-black opacity-75 text text-light text-center fw-bold border border-1 p-2 mb-0 w-100'
            >
              Consulta API
            </h1>

          </nav>
        </div>
        {/* //!Render as you fetch: hasta que no tengamos los datos, no se renderizará. Evitamos dobles renderizados. */}
        <div className="container">

          <div className="row min-vh-100">
            <div className="container-md d-flex justify-content-center align-items-center">
              {
                videosArr.length === 0
                ? (
                  <button 
                    className='btn btn-outline-success text-dark border border-1 border-danger d-flex justify-content-center align-items-center'
                    onClick={handleRequest}
                  >
                    Consultar API
                  </button>
                )
                : (
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="row">
                      <Suspense fallback={<div>Loading...</div>}>
                        <ul className="card-container">
                          {videosArr?.map( (video) => (
                            <div className="card p-1 mx-2 my-3" key={video.id}>
                              <ReactPlayer
                                url={video.video_files[0].link}
                                controls={true}
                                width="50%"
                                height="50%"
                              />
                            </div>
                          ) )}
                        </ul>
                      </Suspense>
                    </div>
                  </div>

                )

              }
            </div>
          </div>
          
        </div>

      </div>
    
    </>
  )
}

export default App

