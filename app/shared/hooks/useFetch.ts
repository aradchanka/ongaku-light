import { useEffect, useState } from "react";

export default function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!url) {
            return;
        }
        let ignore = false;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!ignore) {
                    setData(data);
                }
            })
            .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)))
            .catch(error => {
                if (!ignore) {
                    setError(error);
                }
            })
            .finally(() => {
                if (!ignore) {
                    setLoading(false);
                }
            });
        return () => {
            ignore = true;
        };
    }, [url]);

    return [data, error, loading] as const;
}   