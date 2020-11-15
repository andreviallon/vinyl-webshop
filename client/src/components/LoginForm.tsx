import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, createStyles, Grid, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../state/store';
import { login } from '../state/user/userActions';
import SnackbarMessage, { severity } from './SnackbarMessage';
import * as H from "history";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        center: {
            margin: '0 auto',
            marginTop: theme.spacing(5)
        },
        input: {
            marginTop: theme.spacing(4),
            width: '100%'
        },
        buttonRow: {
            display: 'flex',
            alignItems: 'center',
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(2)
        },
        loader: {
            marginLeft: theme.spacing(2)
        }
    })
);

interface Props {
    location: H.Location;
    history: H.History;
}

const LoginForm: React.FC<Props> = ({ location, history }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector((state: IState) => state.userLogin);
    const { loading, error, user } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (user) {
            history.push(redirect);
        }
    }, [history, user, redirect]);

    const submitHandler = (e: any) => {
        e.preventDefault();
        console.log('submit', email, password);
        dispatch(login(email, password));
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} className={classes.center}>
                    <Typography variant="h4">
                        Login
                    </Typography>
                    <form className={classes.root} onSubmit={submitHandler}>
                        <TextField className={classes.input} label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField className={classes.input} label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        <div className={classes.buttonRow}>
                            <Button variant="contained" color="primary" disableElevation type="submit">Login</Button>
                            {loading &&
                                <CircularProgress className={classes.loader} />
                            }
                        </div>
                        <Link to='/signup' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Typography variant="subtitle1">
                                Do not have an account? <strong>Register</strong>
                            </Typography>
                        </Link>
                    </form>
                </Grid>
            </Grid>
            { !loading && error && <SnackbarMessage severity={severity.ERROR} message={error} /> }
        </div>
    )
}

export default LoginForm
