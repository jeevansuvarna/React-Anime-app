/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { getPopularAnimes } from '../Api/apiService';
import "../css/Recommend.css"
export default function Recommand() {

    const [popular, setPopular] = useState([])

    useEffect(() => {
        getPopularAnimes().then((response) => {
            setPopular(response.data.slice(0, 10))

        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div style={{ flexDirection: "column", display: "flex", float: "left", left: 0 }}>
            <Card style={{ width: "auto", height: "auto", backgroundColor: "#21325E", borderRadius: 5, marginLeft: 5 }}>
                <CardContent>
                    <Typography className="TopList" sx={{ fontFamily: "Arial-BoldMT" }} color="white" gutterBottom>
                        <span clasName="TopTitle" style={{ padding: 13, borderRadius: 5 }}>Popular Animes</span><br></br><br></br>
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

            <Card style={{ width: "auto", height: "auto", float: "left", backgroundColor: "#21325E", borderRadius: 5, marginLeft: 5 }}>
                <CardContent>
                    <Typography className="TopList" sx={{ fontFamily: "Arial-BoldMT" }} color="white" gutterBottom>
                        <center><span clasName="TopTitle" style={{ padding: 13, borderRadius: 5 }}>Popular Animes</span></center><br></br><br></br>
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
