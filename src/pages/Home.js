import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { searchContext } from '../context/search';
import Recommand from '../components/Recommend';
import { getTopAnimes } from '../Api/apiService';
import AnimeList from '../components/AnimeList';



export const Home = () => {

    const search = useContext(searchContext);
    let content = null;
    useEffect(() => {
        getTopAnimes().then((response) => {
            search.setData(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (search.animeData) {
        content = <div style={{ marginTop: 100, display: "flex", flexDirection: "row" }} >
            <Recommand />
            <Box sx={{ float: "left", marginLeft: 1, width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid container item spacing={3} >
                        <AnimeList props={search.animeData} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    }
    return (
        <>
            {content}
        </>
    );
}
