import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeById } from '../Api/apiService';
import { Youtube } from '../components/Youtube';


export const SinglePage = (props) => {
    const params = useParams();
    const [anime, setAnime] = useState(null)
    let content = null;
    let genres = ""

    useEffect(() => {

        getAnimeById(params.id).then((response) => {
            setAnime(response.data)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (anime) {
        // eslint-disable-next-line array-callback-return
        anime.genres.map(data => {
            genres = genres + " " + data.name;
        })
        content = <div className="single">
            <div style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center", marginTop: 100 }}>
                <Card style={{ width: "30%", height: "auto", backgroundColor: "#21325E", borderRadius: 5 }}>
                    <CardMedia
                        component="img"
                        style={{ height: "auto" }}
                        image={anime.images.jpg.large_image_url}
                        alt="green iguana"
                    />
                </Card >
                <Card style={{ width: "50%", height: "auto", maxHeight: "inherit", backgroundColor: "#21325E", borderRadius: 5, float: "right", marginLeft: 20 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 12, fontFamily: "Arial-BoldMT" }} color="white" gutterBottom>
                            <center style={{ backgroundColor: "#519259", paddingTop: 20, borderRadius: 5 }}> <span style={{ fontSize: 12, backgroundColor: "#519259", }}>{anime.title}</span><br></br>
                                <br></br> </center><br></br>
                            <span>Duration: </span><span>{anime.duration}</span><br></br><br></br>
                            <span>Rating:   </span><span>{anime.score}</span><br></br><br></br>
                            <span>Genres:   </span><span>{genres}</span><br></br><br></br>
                            <span>Status:   </span><span>{anime.status}</span><br></br><br></br>
                            <span>Year:     </span><span>{anime.year || "Unknown"}</span><br></br><br></br>
                        </Typography>
                    </CardContent>
                </Card >
            </div>
            <Youtube props={anime} />
        </div >
    }

    return (
        <>
            {content}
        </>
    )
}
