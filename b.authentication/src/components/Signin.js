import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ onSignIn }) {
  const classes = useStyles();

  return (
    <main>
      <div className="sign-in-page">

      <div className="header-row user-information">

        <Link to="/">
          <div className="menu-item">
              <h4>HOME</h4>
              <small>Dashboard & Reports</small>
          </div>
        </Link>

        <Link to="/Component2">
          <div className="menu-item">
              <h4>PROJECTS</h4>
              <small>Project Management</small>
          </div>
        </Link>

        <div className="menu-item">
            <h4>REPORTS</h4>
            <small>Tools & Metrics</small>
        </div>

        <div className="menu-item">
            <h4>ORDERS</h4>
            <small>Order Management</small>
        </div>

        <Link to="/auth/signin">
          <div className="menu-item menu-item-active">
              <h4>USERS</h4>
              <small>Login, Register & Password</small>
          </div>
        </Link>

      </div>

        <div className="signin-container">

          <div className="section-row">
            <div className="grid-row">
              <div className="row text-center">
                <h4>User Login</h4>
              </div>
              <div className="row">
                <label>Email</label>
                <input type="text" placeholder="abc@xyz.com" />
              </div>
              <div className="row">
                <label>Password</label>
                <input type="password" placeholder="********" />
              </div>
              <div className="row">
                <div className="button-row">
                  <Button
                    color="primary"
                    variant="contained"
                    className="button"
                    onClick={onSignIn}
                  >
                    Log In
                  </Button>
                </div>
              </div>

              {/* <div className="row text-center">
                <div className="button-row">
                  <Link to="/auth/forgotpassword" className="link">Forgot Password?</Link>
                </div>
              </div> */}
            </div>

            {/* <div className="row text-center margin-top">
                <Link to="/auth/forgotpassword" className="link">Forgot Password?</Link>
            </div> */}
            <div className="register-here">
              Dont have an account? <Link to="/auth/signup" className="link">Register Here</Link>
            </div>
          </div>

        </div>
        
      </div>
    </main>
  );

  // return (
  //   <Container component="main" maxWidth="xs">
  //     <div className={classes.paper}>
  //       <form
  //         onSubmit={(e) => e.preventDefault()}
  //         className={classes.form}
  //         noValidate
  //       >
  //         <div className="control-row">

  //           <input type="text" placeholder="UserName" />
  //         </div>
  //         <div className="control-row">

  //           <input type="password" placeholder="Password" />
  //         </div>

  //         <div className="button-row">
  //           <Button variant="contained" color="primary" onClick={onSignIn}>
  //             Sign In
  //             </Button>
  //         </div>

  //         <div className="button-row">
  //           <Link to="/auth/signup">
  //               Sign Up
  //           </Link>

  //         </div>

  //       </form>
  //     </div>
  //   </Container>
  // );
}
