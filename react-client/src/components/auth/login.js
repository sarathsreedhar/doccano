import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Button, Avatar, TextField, Box, Grid, Typography, Link, makeStyles } from '@material-ui/core';
import  LockOutlinedIcon  from '@material-ui/icons/LockOutlined';
import { Form, Formik, Field } from 'formik';
import { object, string } from 'yup';

// import { getLoginToken } from './loginAction';


const useStyles = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));



const LoginComponent = (props)=>{
    const classes = useStyles();

    const initialValues = {
        'username': '',
        'password': ''
    }
    
    let redirectUser
    const LoginFunction = (values) => {
        console.log(values)
    }    

    return(
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
        </Typography>


            <Formik initialValues={initialValues} validationSchema={
                object({
                    username: string().required(),
                    password: string().required()
                })
            } onSubmit={(values, helperFunctions) => { LoginFunction(values) }} >

                {({ values, errors, touched, isSubmitting, isValidating }) => (

                    <Form>
                        <Field name="username" as={TextField} label="Username" error={touched.username && errors.username ? true : false} helperText={touched.username && errors.username ? errors.username : ''} variant="outlined" margin="normal" required fullWidth></Field>

                        {/* <ErrorMessage name='username'></ErrorMessage> */}
                        <Field name="password" as={TextField} label="Password" error={touched.password && errors.password ? true : false} helperText={touched.password && errors.password ? errors.password : ''} variant="outlined" type="password" margin="normal" required fullWidth></Field>
                        {/* {touched.password  && errors.password ? errors.password : null} */}
{/* 
                        {userLoginObject && userLoginObject.error ? 
                    <Typography>{userLoginObject.error}</Typography>     */}
                    {/* : ''} */}
                        
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit} disabled={isSubmitting}>Submit</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            {/* <Copyright /> */}
                        </Box>
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default LoginComponent;
