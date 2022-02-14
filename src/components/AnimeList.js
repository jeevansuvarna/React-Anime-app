import React from 'react';
import AnimeCard from './AnimeCard';
import "../css/AnimeList.css"
import { Grid } from '@mui/material';


const AnimeList = (props) => {
    return (
        <>
            {
                props.props.map(function (item, i) {
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
