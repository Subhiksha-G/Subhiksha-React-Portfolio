import { useEffect, useState } from "react";

export function useLocalStorage(key, defaultValue) {

    const [value, setValue] = useState(() => {
        try {
            const savedValue = localStorage.getItem(key);
            return savedValue ? JSON.parse(savedValue) : defaultValue ;
        } catch (error) {
            console.error("Error reading localStorage key: ", key, error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error writing localStorage key: ", key, error);
        }
    }, [key, value])

    return [value, setValue];
}