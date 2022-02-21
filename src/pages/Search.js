import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeByName } from '../Api/apiService';
import AnimeList from '../components/AnimeList';
import Recommand from '../components/Recommend';
import { searchContext } from '../context/search';


export const Search = () => {

    const [dataExists, setDataExists] = useState(true);
    const search = useContext(searchContext);
    const params = useParams();
    let content = "";

    useEffect(() => {

        getAnimeByName(params.id).then((data) => {
            search.setSearch(data.results)
            localStorage.setItem('myData', JSON.stringify(data.results));
        });

        if (
            search.searchData === undefined ||
            Object.keys(search.searchData).length === 0
        ) {
            try {
                search.setSearch(JSON.parse(localStorage.getItem('myData')));
                setDataExists(true);
            } catch (error) {
                console.log(error);
                setDataExists(false);
            }
        }
    }, [search, params.id]);

    if (dataExists) {

        content = <div style={{ marginTop: 100, display: "flex", flexDirection: "row" }} >
            <Recommand />
            <Box sx={{ float: "left", marginLeft: 1, width: "100%" }}>
                <Grid container spacing={2}>
                    <Grid container item spacing={3} >
                        <AnimeList props={search.searchData} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    }
    if (!dataExists) {

        content = <div>
            <Recommand />
            <h1 style={{ top: "50%", position: "absolute", left: "50%" }}>  No Result Found!!!</h1>
        </div>
    }
    return (
        <>
            {content}
        </>

    )
}
