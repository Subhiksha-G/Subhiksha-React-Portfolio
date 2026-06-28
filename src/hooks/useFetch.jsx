import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        fetch(url).then(response => {
            if (!response.ok) throw new Error("Network response  was not ok");
            return response.json();
        }).then(fetchedData => {
            setData(fetchedData);
            setIsLoading(false);
        }).catch(err => {
            console.error("Fetch error : ", err);
            setError(err.message);
            setIsLoading(false);
        });
    }, [url]);

    return { data, isLoading, error };
}