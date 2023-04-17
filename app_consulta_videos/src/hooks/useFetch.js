import { useEffect, useState } from "react";

/**
 * Este hook realiza una petición a la url que recibe como parámetro y devuelve un objeto si la petición responde correctamente; de lo contrario responde con un error.
 * El objeto que retorna contiene:
 *  *El objeto data, con información de la api si todo ha salido ok.
 *  *Un estado error, cargado con información del error si hubo un error.
 *  *Un estado "loading" para dar un feedback mientras la petición se está realizando.
 *  *Una función handleCancelledRequest para manejar el comportamiento de la petición si por algún motivo esta es cancelada antes de devolver la data o el error.
 * @param {string} url
 * @returns { object } 
 */
export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [controller, setController] = useState(null)


    useEffect(() => {
        setLoading(true);

        const fetchData = async (url) => {

            const abortController = new AbortController();
            setController(abortController);

            try {
                const responseJSON = await fetch(url, {
                    signal: abortController.signal
                });
                const responseObjectJS = await responseJSON.json();
                setError(null);
                setData(responseObjectJS);
                // setLoading(false);
                // setError('Ocurrió un error');
                
            } catch (error) {
                if (error.name === 'Abort Error') {
                    setData(null);
                    console.log('Request cancelled');
                } else {
                    setData(null);
                    setError(error.message);
                    throw new Error(error.message);
                }
            } finally {
                setLoading(false);
            }

        }

        fetchData(url);

        return () => controller

    }, []);

    const handleCancelRequest = () => {
        if (controller) {
            setData(null);
            // setError(null);
            controller.abort();
            setError("Request cancelled!");
        }

    }

    return { data, loading, error, handleCancelRequest };
}