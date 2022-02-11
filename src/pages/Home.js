import React, { useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { searchContext } from '../context/search';
import Recommand from '../components/Recommend';
import { Link } from 'react-router-dom';
import { getTopAnimes } from '../Api/apiService';

function ActionAreaCard(data) {

    return (

        < Card sx={{ maxWidth: 300 }
        } style={{ backgroundColor: "#21325E" }}>
            <CardActionArea>
                <Link
                    to={{
                        pathname: `/result/${data.props.mal_id}`,
                        state: { from: 'occupation' }
                    }}
                >
                    <CardMedia
                        component="img"
                        height="280"
                        image={data.props.images.jpg.large_image_url}
                        alt="green iguana"
                    /> </Link>
                <CardContent>
                    <Typography gutterBottom variant="h8" component="div" color="white">
                        {data.props.title_english || data.props.title}
                    </Typography>
                    <Typography variant="body2" color="white">
                        <span>Episodes: </span>{data.props.episodes || "airing"}<br></br><br></br>
                        <span>Status: </span>{data.props.status}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >

    )
}

function FormRow(animeData) {
    const search = useContext(searchContext)

    return (
        <>
            {
                search.animeData.map(function (item, i) {
                    return (
                        <React.Fragment>
                            <Grid item sx={{ width: 298 }}  >
                                <ActionAreaCard props={item} />
                            </Grid>
                        </React.Fragment>
                    );
                })
            }
        </>
    );

}

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
        content = <div style={{ marginTop: 25 }} >
            <Recommand />
            <Box sx={{ flexGrow: 5, marginLeft: 28, width: "82%", flex: "right" }}>
                <Grid container spacing={2}>
                    <Grid container item spacing={3} >
                        <FormRow />
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
