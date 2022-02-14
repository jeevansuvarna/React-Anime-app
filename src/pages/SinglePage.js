import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeById } from '../Api/apiService';
import Recommand from '../components/Recommend';
import { Youtube } from '../components/Youtube';
import "../css/SinglePage.css"

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

        content = <div style={{ marginTop: 100, display: "flex", flexDirection: "row" }} >

            <Recommand />
            <div style={{ display: "flex", flexDirection: "column", width: "90%", height: "100%" }}>
                <div style={{ display: "flex", flexDirection: "row", marginLeft: 30, maxHeight: "35%" }}>
                    <Card style={{ width: "25%", height: "100%", display: "inline-block" }}>
                        <CardMedia
                            component="img"
                            style={{
                                backgroundSize: "cover", display: "block", width: "100%", backgroundRepeat: "no-repeat", height: "100%", objectFit: "cover"
                            }}
                            image={anime.images.jpg.large_image_url}
                            alt="green iguana"
                        />
                    </Card>
                    <Card style={{ backgroundColor: "#21325E", display: "inline-block", borderRadius: 5, float: "right", marginLeft: 20, width: "50%", height: "100%" }}>
                        <CardContent>
                            <Typography sx={{ fontFamily: "Arial-BoldMT" }} color="white" gutterBottom>
                                <center style={{ backgroundColor: "#519259", paddingTop: 20, borderRadius: 5 }}> <span className="title" style={{ backgroundColor: "#519259", }}>{anime.title_english}</span><br></br>
                                    <br></br> </center><br></br>
                                <div className='Description'>
                                    <span>Duration: </span><span>{anime.duration}</span><br></br>
                                    <span>Rating:   </span><span>{anime.score}</span><br></br>
                                    <span>Genres:   </span><span>{genres}</span><br></br>
                                    <span>Status:   </span><span>{anime.status}</span><br></br>
                                    <span>Year:     </span><span>{anime.year || "Unknown"}</span>
                                </div>
                            </Typography>

                        </CardContent>
                    </Card >
                </div>
                <Youtube props={anime} />
            </div>
        </div >
    }

    return (
        <>
            {content}
        </>
    )
}
