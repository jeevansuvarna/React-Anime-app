/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Youtube(props) {
    const classes = useStyles();
    console.log(props.props.embed_url)
    return (
        <div className={classes.root} style={{ paddingTop: 20, paddingBottom: 10 }}>
            <center><Accordion style={{ width: "85%", backgroundColor: "#21325E" }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ borderColor: "white", borderWidth: 4, color: "white" }} className={classes.heading}>Description</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#3E497A", alignItems: "center", justifyContent: "center" }}>
                    <center><Typography style={{ color: "white", justifyContent: "left", textAlign: "left" }}>
                        {props.props.synopsis}
                    </Typography></center>
                </AccordionDetails>
            </Accordion></center><br></br>

            <center><Accordion style={{ width: "85%", backgroundColor: "#21325E" }} >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ borderColor: "white", borderWidth: 4, color: "white" }} className={classes.heading}>Trailer</Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "#3E497A", alignItems: "center", justifyContent: "center" }}>
                    <center><iframe src={props.props.trailer.embed_url} allowfullscreen="allowfullscreen"
                        mozallowfullscreen="mozallowfullscreen"
                        msallowfullscreen="msallowfullscreen"
                        oallowfullscreen="oallowfullscreen"
                        webkitallowfullscreen="webkitallowfullscreen" style={{ width: "100%", height: "auto" }} /></center>
                </AccordionDetails>
            </Accordion></center>
        </div>
    );
}
