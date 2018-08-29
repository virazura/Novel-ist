import React from "react";
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Link, Redirect} from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";

// core components
import EmptyHeader from "components/Header/EmptyHeader.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import Particles from 'react-particles-js';

//style
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 400
      }
    },
    move:{
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {enable: false, rotateX: 600, rotateY: 1200}
    }
  },
  interactivity:{
    detect_on: "window",
    events:{
      onhover: {enable: true, mode: "repulse"}
    },
    resize: true
  }
}



class LoginPage extends React.Component {
  constructor() {
    super();
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      signInEmail: "",
      signInPassword: "",
      isSignIn: false,
      errorLogin: "",
      user: {
        id: "",
        name: "",
        email: "",
        joined: ""
      }
    };
  }

  //load user
  loadUser = (data) => {
    // update user
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined
      }
    })
  }
  
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );

  }

  componentWillUnmount(){
    clearTimeout();
  }

  // email change
  onEmailChange = (event) => {
    this.setState({ signInEmail : event.target.value})
  }

  //password change
  onPasswordChange = (event) => {
    this.setState({ signInPassword : event.target.value})
  }

  //submit change
  onSubmitSignIn = () => {
    fetch('http://localhost:3001/signin', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then( user => {
        if(user.id){
          this.loadUser(user)
          this.setState({ isSignIn: true})
        }else{
          this.setState({ errorLogin: "Please check your email and password"})
        }
      })
  }


  render() {
    // eslint-disable-next-line
    const { classes, ...rest } = this.props;
    const { errorLogin } = this.state;

    if(this.state.isSignIn){
      return <Redirect to={{
        pathname: "/home",
        state: { id: this.state.user.id}
      }}/>
    }
    

    return (
      <div>
        <EmptyHeader/>          
        <div
          className={classes.pageHeader}
        >
         <Particles className={classes.particles}
          params={ particlesOptions}
          /> 
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader className={classes.cardHeader}>
                      <h3>Login</h3>
                    </CardHeader>
                    
                    <CardBody className={classes.cardbody}>
                      <FormControl fullWidth className={classes.signinform}>
                        <InputLabel htmlFor="email-address">Email</InputLabel>
                        <Input
                          
                          type="email"
                          name="email-address"
                          id="email-address"
                          onChange={this.onEmailChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor}/>
                            </InputAdornment>
                          }
                        />
                        <InputLabel htmlFor="password" className={classes.passwordlabel}>Password</InputLabel>
                        <Input
                          type="password"
                          name="password"
                          id="password"
                          onChange={this.onPasswordChange}
                          endAdornment={
                            <InputAdornment position="end">
                              <LockOutline className={classes.inputIconsColor}/>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </CardBody>
                    {(errorLogin) ? 
                      <SnackbarContent 
                        message={errorLogin}
                        className={classNames(classes.root, classes.message)}
                      /> 
                      : "" 
                    }
                    
                    <CardFooter className={classes.cardFooter}>
                    <p className={classes.divider}>Don't have an account?
                    <Link to='/register-page'>
                    Register
                    </Link>
                    </p>
                    <div className={classes.buttonplace}>
                      <Button className={classes.buttonsingin} size="sm" onClick={this.onSubmitSignIn} >
                    
                        Sign In
                      </Button>
                    </div>
                    </CardFooter>

                  </form>
                </Card>
              </GridItem>
            </GridContainer>

          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
