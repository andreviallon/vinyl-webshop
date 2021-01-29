import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '6rem'
    }
  }),
);

const PageWrapper = ({ children }: any ) => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {children}
        </Container>
    )
}

export default PageWrapper
