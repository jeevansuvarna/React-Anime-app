import React from 'react';
import AnimeCard from './AnimeCard';
import "../css/AnimeList.css"
import { Grid } from '@mui/material';


const AnimeList = (props) => {
    let mapData = {};

    if (Object.keys(props.props).length === 0) {
        mapData = JSON.parse(localStorage.getItem('myData'));
    }
    else
        mapData = props.props

    console.log(props.props)
    return (
        <>
            {
                mapData.map(function (item, i) {
                    return (
                        <React.Fragment key={item.mal_id}>
                            <Grid item sx={{ width: 298 }}  >
                                <AnimeCard props={item} />
                            </Grid>
                        </React.Fragment>
                    );
                })
            }
        </>
    );
};

export default AnimeList;
