import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, createStyles, Grid, makeStyles, TextField, Theme, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../state/store';
import { register } from '../state/user/userActions';
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

const RegisterForm: React.FC<Props> = ({ location, history }) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const userRegister = useSelector((state: IState) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e: any) => {
        setErrorMessage('');
        e.preventDefault();

        if(password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
        } else {
            dispatch(register(name, email, password));
        }
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} className={classes.center}>
                    <Typography variant="h4">
                        Sign up
                    </Typography>
                    <form className={classes.root} onSubmit={submitHandler}>
                        <TextField className={classes.input} label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                        <TextField className={classes.input} label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <TextField className={classes.input} label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <TextField className={classes.input} label="Confirm Password" variant="outlined" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                        <div className={classes.buttonRow}>
                            <Button variant="contained" color="primary" disableElevation type="submit">Sign up</Button>
                            {loading && <CircularProgress className={classes.loader} /> }
                        </div>
                        <Link to='/login' style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <Typography variant="subtitle1">
                                Already have an account? <strong>Login</strong>
                            </Typography>
                        </Link>
                    </form>
                </Grid>
            </Grid>
            { !loading && error && <SnackbarMessage severity={severity.ERROR} message={error} />}
            { errorMessage && <SnackbarMessage severity={severity.ERROR} message={errorMessage} />}
        </div>
    )
}

export default RegisterForm
