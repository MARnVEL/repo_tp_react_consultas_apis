import React from 'react'

function Card({data, posicion, handleDelete}) {
    // console.log(posicion);

    /* const handleDelete = (posicion) => {
        console.log("El boton lo apreté en: ", posicion);
    } */

    return (
        <div className='col-md-4 sm-6 d-flex justify-content-center align-items-center'>
            <div className="card" style={ {width: "18rem"} }>
                <img src={data} className="card-img-top" alt="Imagen de perro" />
                <div className="card-body">
                    <h5 className="card-title">Can</h5>
                    <p className="card-text">
                        Perros!
                    </p>
                    <button className='btn btn-primary' onClick={() => handleDelete(posicion)}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card