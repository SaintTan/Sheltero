import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { PrimButton, H2, TextLink } from '../components/theme';
import Copyright from '../components/Copyright';
import { Link as RouterLink } from "react-router-dom";
import { Avatar,
         CssBaseline,
         TextField,
         Link,
         Grid,
         Box,
         Typography,
         makeStyles,
         Container } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#99C015',
  },
  box: {
    margin: theme.spacing(8,0,2,0),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    margin: theme.spacing(.5, 0, .5),
  },
  positionLeft: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  
  })
)

export default function Login() {
const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <UserOutlined />
        </Avatar>
        <H2 component="h1" variant="h5">
          Sign up
        </H2>
        
        <form className={classes.form} noValidate>

          
          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>


          </Grid>

          <PrimButton
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}>
            Login
          </PrimButton>

          <Grid container justify="flex-end">
            <Grid item>
                <TextLink variant="body2" href="/register" >
                  Haven't registered yet? Sign up!
                </TextLink>
            </Grid>
          </Grid>

        </form>
      </div>

      <Box mt={5} className={classes.box}>
        <Copyright />
      </Box>

    </Container>
  );
}