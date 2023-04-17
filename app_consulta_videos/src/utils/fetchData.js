
function getSuspender(promise) {
    // console.log("Entró al getSuspender");
    let status = "pending";
    let response;
    const suspender = promise.then(
        (res) => {
            status = 'success';
            response = res;
        },
        (err) => {
            status = 'error';
            response = err;
        }
    );

    const read = () => {
        switch(status) {
            case 'pending':
                throw suspender;
            case 'error':
                throw response;
            default:
                return response;
        }
    }
    // console.log(read);
    return { read }
}

export function fetchData(url, options) {
    const promise = fetch(url, options)
        .then((response) => response.json())
        .then((json) => json)
    
    return getSuspender(promise)
}
