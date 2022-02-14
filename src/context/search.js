import { createContext } from 'react';

export const searchContext = createContext({
    searchData: [],
    animeData: [],
    singleData: {},
    setData: () => { },
    setSingle: () => { },
    setSearch: () => { },
})
