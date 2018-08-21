import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Redirect } from "react-router-dom";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

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
import Home from "views/Home/Home.jsx";

import Particles from 'react-particles-js';
//style
import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";


const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
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

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: "",
      name: "",
      isRegistered: false,
      user: {
        id: "",
        name: "",
        email: "",
        joined: ""
      }
    };
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

  //name change
  onNameChange = (event) => {
    this.setState({ name: event.target.value})

  }

  // email change
  onEmailChange = (event) => {
    this.setState({ email : event.target.value})
  }

  //password change
  onPasswordChange = (event) => {
    this.setState({ password : event.target.value})
  }

  //update user
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

  //submit change
  onSubmitSignIn = () => {
    fetch('http://localhost:3001/register', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
      })
    })
      .then(response => response.json())
      .then( user => {
        if(user){
          this.loadUser(user);
          this.setState({ isRegistered: true})
        }
      })
  }

  

  render() {
    const { classes, ...rest } = this.props;
    
    if( this.state.isRegistered === true){
      return <Redirect to='/home' component={Home}/>
    }

    return (
      <div>
        <Header
          fixed
          color="montecarlo"
          brand="Novel-list"
          rightLinks={<HeaderLinks  navLink1="" navLink2="" navLink3="" navLink4=""/>}
          {...rest}
        />
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
                      <h3>Register</h3>
                    </CardHeader>
                    
                    <CardBody className={classes.cardbody}>
                      <FormControl fullWidth className={classes.signinform}>
                        <InputLabel htmlFor="name">Full Name</InputLabel>
                          <Input
                            type="text"
                            name="name"
                            id="name"
                            onChange={this.onNameChange}
                            endAdornment={
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor}/>
                              </InputAdornment>
                            }
                          />
                        <InputLabel htmlFor="email-address" className={classes.emaillabel}>Email</InputLabel>
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
                    <CardFooter className={classes.cardFooter}>
                    <div className={classes.buttonplace}>
                      <Button className={classes.buttonsingin} size="sm" onClick={this.onSubmitSignIn} >
                        Register
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

export default withStyles(registerPageStyle)(RegisterPage);
