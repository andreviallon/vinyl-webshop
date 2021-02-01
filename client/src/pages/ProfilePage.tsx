import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import UserProfile from '../components/UserProfile';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
            {value === index && (
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
    }
}));

const ProfilePage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example">
                <Tab label="Profile" {...tabProps(0)} />
                <Tab label="Orders" {...tabProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <UserProfile />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <p>Order history will go here</p>
            </TabPanel>
        </div>
    );
}

export default ProfilePage
