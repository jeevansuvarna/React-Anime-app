/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { getPopularAnimes } from '../Api/apiService';

export default function Recommand() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopularAnimes().then((response) => {
            setPopular(response.data.slice(0, 10))

        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{ flexDirection: "column", display: "flex", width: 100, float: "left" }}>
            <Card style={{ width: 200, height: "auto", backgroundColor: "#21325E", borderRadius: 5, marginLeft: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 12, fontFamily: "Arial-BoldMT" }} color="white" gutterBottom>
                        <span style={{ fontSize: 18, backgroundColor: "#1C7947", padding: 13, borderRadius: 5, paddingRight: 16 }}>Popular Animes</span><br></br><br></br>
                        {
                            popular.map(function (item, i) {
                                return (<>
                                    <a key={item.entry.mal_id} style={{ lineHeight: 3 }}>{item.entry.title}</a><br></br>
                                </>
                                );
                            })
                        }
                    </Typography>
                </CardContent>
            </Card ><br></br>

            <Card style={{ width: 200, height: "auto", float: "left", backgroundColor: "#21325E", borderRadius: 5, marginLeft: 5 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 12, fontFamily: "Arial-BoldMT" }} color="white" gutterBottom>
                        <span style={{ fontSize: 18, backgroundColor: "#1C7947", padding: 13, borderRadius: 5, paddingRight: 16 }}>Popular Animes</span><br></br><br></br>
                        {
                            popular.map(function (item, i) {
                                return (<>
                                    <a key={item.entry.mal_id} style={{ lineHeight: 3 }}>{item.entry.title}</a><br></br>
                                </>
                                );
                            })
                        }
                    </Typography>
                </CardContent>
            </Card >
        </div>

    );
}
