import React from "react";
import { Paper, Grid, makeStyles, Link, CssBaseline } from "@material-ui/core";
import LoginComponent from "../components/auth/login";


const useStyles = makeStyles((theme) =>({
    root: {
        margin: '5vh',
        height: '80vh'
    }
}))

export default function AuthLandingContainer(props){

    const classes = useStyles;

    return(
        <Grid container justify="center" component="main" className={classes.root} >
            <CssBaseline />
            <Grid item xs={12} sm={5} md={5} component={Paper} elavation={6} square>
                <LoginComponent/>
            </Grid>
        </Grid>
    )
}
