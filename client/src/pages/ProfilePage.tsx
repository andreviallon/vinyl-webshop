import React, { useState, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import UserProfile from '../components/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../state/store';
import { RouteComponentProps } from 'react-router-dom';
import { getUserDetails } from '../state/user/userActions';
import { CircularProgress } from '@material-ui/core';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    tab: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, tab, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={tab !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
            {tab === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function tabProps(index: any) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex'
    },
    tabPenalContainer: {
        flexGrow: 1
    },
    loader: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const ProfilePage = ({ location, history }: RouteComponentProps) => {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const userDetailsState = useSelector((state: IState) => state.userDetails);
    const { loading, userDetails, error } = userDetailsState;

    useEffect(() => {
        if (!userDetails) {
            // history.push('/login')
        } else {
            if (!userDetails.name) {
                dispatch(getUserDetails('profile'));
            } else {
                setName(userDetails.name)
                setEmail(userDetails.email)
            }
        }
    }, [dispatch, history, userDetails])


    console.log('userDetails', userDetails);

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs orientation="vertical" variant="scrollable" value={tab} onChange={handleChange} aria-label="Vertical tabs example">
                <Tab label="Profile" {...tabProps(0)} />
                <Tab label="Orders" {...tabProps(1)} />
            </Tabs>
            <div className={classes.tabPenalContainer}>
                <TabPanel tab={tab} index={0}>
                    {loading ? 
                        <div className={classes.loader}>
                            <CircularProgress />
                        </div>
                    :
                        <UserProfile />
                    }
                </TabPanel>
                <TabPanel tab={tab} index={1}>
                    <p>Order history will go here</p>
                </TabPanel>
            </div>
        </div>
    );
}

export default ProfilePage
