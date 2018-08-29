import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Redirect } from "react-router-dom";
import classNames from "classnames";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LockOutline from "@material-ui/icons/LockOutline";
import People from "@material-ui/icons/People";
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
import registerPageStyle from "assets/jss/material-kit-react/views/registerPage.jsx";


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

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      password: "",
      name: "",
      errorRegister: "",
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
        if(user === "Empty input"){
          this.setState({ errorRegister: "Please fill all the fields"})
        }else{
          this.loadUser(user.id);
          this.setState({ isRegistered: true})
        }
      })
  }

  

  render() {
    // eslint-disable-next-line
    const { classes, ...rest } = this.props;
    const { errorRegister } = this.state
    if( this.state.isRegistered === true){
      return <Redirect to={{pathname: '/home', state:{id: this.state.user.id }}} />
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
                    {(errorRegister) ? 
                      <SnackbarContent 
                        message={errorRegister}
                        className={classNames(classes.root, classes.message)}
                      /> 
                      : "" 
                    }
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
