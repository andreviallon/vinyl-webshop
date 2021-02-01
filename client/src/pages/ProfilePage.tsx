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
import { CircularProgress, Grid } from '@material-ui/core';

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
        backgroundColor: theme.palette.background.paper
    },
    tabPenalContainer: {
        flexGrow: 1
    },
    center: {
        margin: '0 auto'
    }
}));

const ProfilePage = ({ location, history }: RouteComponentProps) => {
    const classes = useStyles();
    const [tab, setTab] = useState(0);
    
    const dispatch = useDispatch();
    const userDetailsState = useSelector((state: IState) => state.userDetails);

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={tab} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Profile" {...tabProps(0)} />
                <Tab label="Order History" {...tabProps(1)} />
            </Tabs>
            <div className={classes.tabPenalContainer}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={10} className={classes.center}>
                        <TabPanel tab={tab} index={0}>
                            <UserProfile location={location} history={history} />
                        </TabPanel>
                        <TabPanel tab={tab} index={1}>
                            <p>Order history will go here</p>
                        </TabPanel>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default ProfilePage
