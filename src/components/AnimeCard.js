import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import "../css/AnimeCard.css"

const AnimeCard = (props) => {

    console.log(props.props)
    // const history = Navigate();

    // const search = useContext(SearchContext);

    // const onClickHandler = (event) => {
    // event.preventDefault();
    // fetch(`https://api.jikan.moe/v3/anime/${props.props.mal_id}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         search.setSingle(data);
    //         localStorage.setItem('singleData', JSON.stringify(data));
    //         history('/single-view');
    //     });
    // };


    const _title =
        props.props.title.length > 20
            ? `${props.props.title.substring(0, 15)}...`
            : props.props.title;

    let imageUrl = '';

    try {
        imageUrl = props.props.images.jpg.large_image_url
    }
    catch (e) {
        imageUrl = props.props.image_url;

    }


    return (
        < Card sx={{ maxWidth: 300 }
        } style={{ backgroundColor: "#21325E" }}>
            <CardActionArea>
                <Link
                    to={{
                        pathname: `/result/${props.props.mal_id}`,
                        state: { from: 'occupation' }
                    }}
                >
                    <CardMedia
                        component="img"
                        height="280"
                        image={imageUrl}
                        alt="green iguana"
                    /> </Link>
                <CardContent>
                    <Typography gutterBottom variant="h8" component="div" color="white">
                        {props.props.title_english || _title}
                    </Typography>
                    <Typography variant="body2" color="white">
                        <span>Episodes: </span>{props.props.episodes || "airing"}<br></br><br></br>
                        <span>Status: </span>{props.props.airing ? "airing" : "Completed"}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >

    );
};

export default AnimeCard;
