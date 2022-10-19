import { useState, useEffect } from 'react';
export function useDebounce(value: string, delay = 500): string {
    const [debounced, setDebounsed] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => setDebounsed(value), delay)
        return () => clearTimeout(handler)
    }, [value, delay])
    return debounced
}