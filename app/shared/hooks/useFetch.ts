import { useEffect, useState } from "react";

export default function useFetch(url: string) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
}   