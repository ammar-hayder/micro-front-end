import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Header({ isSignedIn, onSignOut }) {
  const classes = useStyles();

  const onClick = () => {
    if (isSignedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >

        <Toolbar className={classes.toolbar}>
          {/* <RouterLink to="/"> */}
            <div className>
              <div className="logo"></div>
            </div>
          {/* </RouterLink> */}

          {!isSignedIn ? '' :
            <div className="search-header">
              <input type="text" placeholder="Search..." />
            </div>
          }

          {/* <Typography
            className="company-name"
            variant="h5"
            color="inherit"
            noWrap
            component={RouterLink}
            to="/"
          >
            Ui - MicroFrontEnd
          </Typography> */}

          {isSignedIn 
          ? 
            <RouterLink onClick={onClick}>
              <div className="b-menu">
                <div className="sign-out"></div>
              </div>
            </RouterLink>
          :
          ''
          //   <Button
          //   color="primary"
          //   variant="outlined"
          //   className="button"
          //   component={RouterLink}
          //   to={isSignedIn ? '/' : '/auth/signin'}
          //   onClick={onClick}
          // >
          //   Login
          // </Button>
          }

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
