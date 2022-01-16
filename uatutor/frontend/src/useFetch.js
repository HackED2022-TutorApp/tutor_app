import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal} )
            .then(res => {
                console.log(res);
                if (!res.ok){
                    throw Error('Brad is too gay to fetch the resource');
                }
                return res.json();
            })
            .then((data) => {
                setdata(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if (err.name ===  'AbortError'){
                    console.log("fetch aborted");
                }
                else{
                    setError(err.message);
                    setIsPending(false);
                }
            }); 
        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;