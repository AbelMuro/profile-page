import {useState, useEffect} from 'react';

function useMediaQuery(initialQuery : string){
    const [matches, setMatches] = useState<boolean>(false);

    const handleMatches = (media : MediaQueryListEvent) => {
        setMatches(media.matches);
    }

    useEffect(() => {
        const media = window.matchMedia(initialQuery);
        setMatches(media.matches);
        media.addEventListener('change', handleMatches);

        return () => {
            media.removeEventListener('change', handleMatches);
        }
    }, []);

    return [matches];
}

export default useMediaQuery;