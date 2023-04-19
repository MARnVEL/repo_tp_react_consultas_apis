import { useEffect, useState } from 'react'
import Card from './components/Card';
import './App.css';

function App() {

  const [respuestaAPI, setRespuestaAPI] = useState([]);

  const consumirAPI = async (url) => {
    try {
      const respJSON = await fetch(url);
      // console.log(respJSON);
      const respObjeto = await respJSON.json();
      // console.log(respObjeto);
      setRespuestaAPI(respObjeto);
      
    } catch (error) {
      console.log("Hubo un error al tratar de generar los operandos", error.message);
    }
  }
  // console.log("Este es el estado: ", respuestaAPI);
  
  const handleDelete = (posicion) => {
    
    setRespuestaAPI(prevState => (
      {
        ...prevState,
        message: prevState.message.filter((item, i) => i !== posicion)
      }
    ));

  }

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

      </div>
      <div className="container-md">

        <div className="row min-vh-100">
          <div className="container-md d-flex justify-content-center align-items-center">

            {
              respuestaAPI.length === 0
              ? (
                <button 
                  className='btn btn-outline-success text-dark border border-1 border-danger d-flex justify-content-center align-items-center'
                  onClick={() => consumirAPI("https://dog.ceo/api/breed/pug/images")}
                >
                  Consultar API
                </button>

              )
              : ( 
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="row">

                      {
                        respuestaAPI.message.map( (item, i) => (
                          <Card
                            className="d-flex justify-content-center align-items-center"
                            key={i}
                            posicion={i}
                            data={item}
                            handleDelete={handleDelete}
                          />
                        ))
                      }
                    </div>
                    
                  </div>
                )
            }
          </div>

        </div>
      </div>

    </>

  )
}

export default App
