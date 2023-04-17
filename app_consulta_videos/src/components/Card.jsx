import React from 'react'

function Card({data, posicion, handleDelete}) {
    // console.log(posicion);

    /* const handleDelete = (posicion) => {
        console.log("El boton lo apreté en: ", posicion);
    } */

    return (
        <div className='col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center'>
            <div className="card mb-3 p-1 border border-1 border-black" style={ {width: "18rem"} }>
                {/* Ojo con la clase de la etiqueta img porque tiene estilos especiales en una hoja css separada */}
                <img src={data} className="card-img-top" alt="Imagen de perro" />
                <div className="card-body">
                    <h5 className="card-title">The Perros App</h5>
                    <p className="card-text">
                        Dog's name
                    </p>
                    <div className="container-md d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="container-md d-flex justify-content-center align-items-center">
                                <button
                                    className='btn btn-outline-danger opacity-75 text-dark fw-bold shadow-lg hover'
                                    onClick={() => handleDelete(posicion)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card