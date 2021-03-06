import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../state/store';
import { getUserDetails, updateUserProfile } from '../state/user/userActions';
import SnackbarMessage, { severity } from './SnackbarMessage';
import * as H from "history";
import { IUser } from '../models/userModel';
import * as userActionTypes from "../state/user/userActionTypes";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1
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

const UserProfile: React.FC<Props> = ({ location, history }) => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();

    const userDetailsState = useSelector((state: IState) => state.userDetails);
    const { loading, userDetails, error, updateSuccess } = userDetailsState;

    const userLogin = useSelector((state: IState) => state.userLogin);
    const { user } = userLogin;



    useEffect(() => {
        if (!user) {
            history.push('/login');
        } else {
            if (!userDetails?.name) {
                dispatch({ type: userActionTypes.USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetails('profile'));
            } else {
                setName(userDetails?.name);
                setEmail(userDetails?.email);
            }
        }
    }, [dispatch, history, userDetails]);


    const submitHandler = (e: any) => {
        setErrorMessage('');
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
        } else if(userDetails) {
            const updatedUser: Partial<IUser> = { _id: userDetails?._id, name, email, password };
            dispatch(updateUserProfile(updatedUser));
        }
    }

    return (
        <div className={classes.root}>            
            <form className={classes.root} onSubmit={submitHandler}>
                <TextField className={classes.input} label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField className={classes.input} label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField className={classes.input} label="Password" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <TextField className={classes.input} label="ConfirmPassword" variant="outlined" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} 
            />
                <div className={classes.buttonRow}>
                    <Button variant="contained" color="primary" disableElevation type="submit">Update</Button>
                    {loading && <CircularProgress className={classes.loader} />}
                </div>
            </form>
            { updateSuccess && <SnackbarMessage severity={severity.SUCCESS} message={'Your profile was updated'} />}
            { error && <SnackbarMessage severity={severity.ERROR} message={error} />}
            { errorMessage && <SnackbarMessage severity={severity.ERROR} message={errorMessage} />}
        </div>
    )
}

export default UserProfile
