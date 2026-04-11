import {useState, useEffect} from 'react';

function useMediaQuery(initialQuery : string){
    const [matches, setMatches] = useState<boolean>(false);

    const handleMatches = (media : MediaQueryListEvent) => {
        setMatches(media.matches);
    }

    useEffect(() => {
        const media = window.matchMedia(initialQuery);

        media.addEventListener('change', handleMatches);
    }, [initialQuery]);

    return [matches];
}

export default useMediaQuery;