import { createContext } from 'react';

export const searchContext = createContext({
    animeData: [],
    singleData: {},
    search: () => { },
    topAnimes: () => { },
    setData: () => { },
    setSingle: () => { },
    popular: () => { },
    getAnimeById: () => { }

})
