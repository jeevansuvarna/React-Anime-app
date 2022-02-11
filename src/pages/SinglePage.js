import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Youtube from '../components/Youtube';


export const SinglePage = (props) => {
    const params = useParams();
    const [anime, setAnime] = useState(null)
    const url = `https://api.jikan.moe/v4/anime/${params.id}`
    let content = null;
    let genres = ""
    useEffect(() => {

        axios.get(url).then(res => {
            setAnime(res.data)
        })
    }, [url])

    if (anime) {
        // eslint-disable-next-line array-callback-return
        anime.data.genres.map(data => {
            genres = genres + " " + data.name;
        })
        content = <>
            <div style={{ width: "100%", justifyContent: "center", display: "flex", alignItems: "center", marginTop: 100 }}>
                <Card style={{ width: "30%", maxHeight: 600, backgroundColor: "#21325E", borderRadius: 5 }}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={anime.data.images.jpg.large_image_url}
                        alt="green iguana"
                    />
                </Card >
                <Card style={{ width: "50%", height: "auto", backgroundColor: "#21325E", borderRadius: 5, float: "right", marginLeft: 20 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 18, fontFamily: "Arial-BoldMT" }} color="white" gutterBottom>
                            <center style={{ backgroundColor: "#519259", paddingTop: 20, borderRadius: 5 }}> <span style={{ fontSize: 20, backgroundColor: "#519259", }}>{anime.data.title}</span><br></br>
                                <br></br> </center><br></br>
                            <span>Duration: </span><span>{anime.data.duration}</span><br></br><br></br>
                            <span>Rating:   </span><span>{anime.data.score}</span><br></br><br></br>
                            <span>Genres:   </span><span>{genres}</span><br></br><br></br>
                            <span>Status:   </span><span>{anime.data.status}</span><br></br><br></br>
                            <span>Year:     </span><span>{anime.data.year || "Unknown"}</span><br></br><br></br>
                        </Typography>
                    </CardContent>
                </Card >
            </div>
            <Youtube props={anime.data} />
        </>
    }

    return (
        <>
            {content}
        </>
    )
}
