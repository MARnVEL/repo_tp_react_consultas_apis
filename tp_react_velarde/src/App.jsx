import { useEffect, useState } from 'react'
import Card from './components/Card';
import './App.css';



function App() {

  const [respuestaAPI, setRespuestaAPI] = useState([])

  /* 
  useEffect(() => {

    const consumirAPI = async (url) => {
      const url = "https://dog.ceo/api/breed/pug/images";
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

    consumirAPI();

  }, [])
   */


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
    /**
     * Se utiliza el método setState de React para actualizar el estado de forma inmutable y reemplazar el valor del array message con uno nuevo que se obtiene a través del método filter.
     * La actualización "inmutable" significa que se está creando una nueva copia del objeto del estado con los cambios necesarios, en lugar de modificar el objeto del estado original. Esto asegura que el estado original no se modifique accidentalmente y ayuda a evitar errores en la aplicación. En React, se utiliza la función setState o el hook useState para actualizar el estado de forma inmutable.
     * La actualización "no inmutable" significa que se está modificando directamente el objeto del estado original, en lugar de crear una nueva copia del objeto del estado con los cambios necesarios. Esto puede tener consecuencias no deseadas, como modificar accidentalmente el estado original y provocar errores en la aplicación.
     */
    setRespuestaAPI(prevState => (
      {
        ...prevState,
        message: prevState.message.filter((item, i) => i !== posicion)
      }
    ));

    /* 
    console.log("El boton lo apreté en: ", posicion);
    console.log("Esta es la longitud del array que viene en la respuesta: ", respuestaAPI.message.length);
    // console.log(respuestaAPI.message.splice(posicion, 1))


    let respuestaAPI_tratamiento = respuestaAPI.message.map(element => element)

    console.log("Este es el nuevo array igual a lo que me devuelve la API", respuestaAPI_tratamiento);
    console.log("Este es la longitud del nuevo array igual a lo que me devuelve la API", respuestaAPI_tratamiento.length);
    
    respuestaAPI_tratamiento.splice(posicion, 1)
    
    console.log("Este es el nuevo array después del splice", respuestaAPI_tratamiento);
    console.log("Este es la longitud del nuevo array después del splice", respuestaAPI_tratamiento.length);

    setRespuestaAPI(respuestaAPI_tratamiento);
    console.log(respuestaAPI.message.length);
 */

  }
  
  return (
    <div className="container-md">
      <div className="row mb-2">
        <h1 
          className='col-md-12 bg bg-danger text-white text-center border border-1 rounded rounded-2 p-2 mb-0'
        >
          Consulta API
        </h1>

      </div>
      <div className="row min-vh-100">
        <div className="conteiner-md d-flex justify-content-center align-items-center">

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
    
  )
}

export default App
