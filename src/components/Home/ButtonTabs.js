import React from "react";
import { Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function ButtonTabs() {
    const classes = useStyles();
    return (
        <div className=" text-center center-block" style={{marginRight: "3em"}} >
            <Box className={classes.root} mx="auto">
                <Grid container spacing={0} className="d-md-inline-flex justify-content-around p-4">
                <Grid item xs={6} sm={6} md={2} lg={2} >
                <a href="/technology"><Button variant="contained" className="m-1" color="primary">Technology</Button></a>

                    </Grid>
                    
                
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                <a href="/entertainment"><Button variant="contained" className="m-1" color="primary">Entertainment</Button></a>

                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2}>

                        <a href="/trending"><Button variant="contained" className="m-1" color="primary">Trending</Button></a>
                    </Grid>
                    
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                <a href="/reactions"><Button variant="contained" className="m-1" color="primary">Reactions</Button></a>
                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                <a href="/sports"><Button variant="contained" className="m-1" color="primary">Sports</Button></a>


                    </Grid>
                    <Grid item xs={6} sm={6} md={2} lg={2}>
                <a href="/moods"><Button variant="contained" className="m-1" color="primary"> Moods</Button></a>
                    </Grid>
			</Grid>
            </Box>
        </div>
    )
}