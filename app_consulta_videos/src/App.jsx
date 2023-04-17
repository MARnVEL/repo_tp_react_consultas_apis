
// import { useEffect, useState } from 'react'
// dotenv.config();
import { useState, Suspense } from "react";

import './App.css'

import { fetchData } from './utils/fetchData';

// import { useFetch } from './hooks/useFetch';

// console.log(apiData);
// const apiData = fetchData('https://jsonplaceholder.typicode.com/users');


//Preparamos el cuerpo de la request
const API_KEY = import.meta.env.VITE_API_KEY
const API_URL_10_PICS = import.meta.env.VITE_API_URL_10_PICS
const API_URL_VIDS = import.meta.env.VITE_API_URL_VIDS

// console.log(API_URL_10_PICS);

const options = {
  headers : {
      "Content-type": "application/json",
      "Authorization": API_KEY
  }
}



const options2 = {
  method : "DELETE",
  headers : {
    "Content-Type": "application/json",
  },

}

const apiData = fetchData(API_URL_VIDS, options);
// console.log("ApiData", apiData);

function App() {
  
  const data = apiData.read();
  console.log(data);
  // const [count, setCount] = useState(0);
  const [videos, setVideos] = useState(null);

  // const [cards, setCards] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [showButton, setShowButton] = useState(true);

  // useEffect(() => {
    
  //   async function fetchVideos() {
  //     const response = await fetch("https://www.mmobomb.com/api1/games");
  //     const data = await response.json();
  //     setVideos(data);
  //   }

  //   fetchVideos();
  // }, []);

  const handleClose = (id) => {
    setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
  }

  // const fetchData = async () => {
  //   const response = await fetch("https://www.mmobomb.com/api1/games");
  //   const data = await response.json();
  //   setCards(data);
  //   setIsLoading(false);
  //   setShowButton(false);
  // };

  // const { data, loading, error, handleCancelRequest } = useFetch('https://jsonplaceholder.typicode.com/users')

  

  return (
    // <>
    //   <div className="container-fluid p-0">

    //     <div className="row mb-2 mt-0">
    //       <nav className='navbar navbar-expand-lg bg-body-tertiary container-fluid mx-0 mt-0'>
    //       <div className="container-fluid px-0">
    //         <h1 
    //           className='bg bg-black opacity-85 text text-light text-center fw-bold border border-1 p-2 mb-0 w-100'
    //         >
    //           Lista de videos
    //         </h1>

    //       </div>

    //       </nav>
    //     </div>
    //   </div>

    //   <div className="container-md">
    //     <div className="row min-vh-100">
    //       <div className="container-md d-flex justify-content-center align-items-center">
    //         <button 
    //           className='btn btn-outline-success text-dark border border-1 border-danger d-flex justify-content-center align-items-center'
    //           onClick={() => console.log("hice click")}
    //         >
    //           Consultar API
    //         </button>

    //       </div>

    //     </div>
    //   </div>

    // </>

    // <div className="container mt-4">
    //   <h1 className="text-center mb-4">Lista de Videos</h1>
    //   <button className="btn btn-primary mb-4">Consultar API</button>
    //   <div className="row row-cols-1 row-cols-md-3 g-4">
    //     {videos.map((video) => (
    //       <div key={video.id} className="col">
    //         <div className="card h-100">
    //           <img src={video.image} className="card-img-top" alt={video.name} />
    //           <div className="card-body d-flex flex-column">
    //             <h5 className="card-title">{video.name}</h5>
    //             <p className="card-text">{video.description}</p>
    //             <div className="mt-auto">
    //               <button className="btn btn-danger me-2" onClick={() => handleClose(video.id)}>
    //                 Cerrar
    //               </button>
    //               <button className="btn btn-secondary">
    //                 <i className="bi bi-play-circle-fill"></i> Reproducir
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    // Fetching común
    // <div className="container">
    //   <h1>Fetchig test</h1>
    //   <button onClick={handleCancelRequest}>Cancel Request</button>
    //   <div className="card">
    //     <ul>
    //       { error && <li>Error: {error}</li> }
    //       { loading && <li>Loading...</li> }
    //       { data?.map( user => (
    //         <li key={user.id}>{user.name}</li>
    //         ))}
    //     </ul>
    //   </div>
    // </div>

    //!Render as you fetch
    <div className="container">
      <h1>Fetchig test</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="card">
          {data?.map( (item) => (
            <li key={item.id}>{item.name}</li>
          ) )}
        </ul>
      </Suspense>
      
    </div>
  )
}

export default App

