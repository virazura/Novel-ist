import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Library from "@material-ui/icons/LibraryBooks";
import Palette from "@material-ui/icons/Palette";
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderHome from "components/Header/HeaderHome.jsx"
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Book from "components/Books/Book.jsx";

import profile from "assets/img/faces/christian.jpg";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id: this.props.location.state.id
    }
  }

  componentDidMount(){
    fetch('http://localhost:3001/profile',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id: this.state.id,            
        })
    })
    .then(response => response.json())
    .then( data =>{
      this.setState({
        name: data.name,
        about: data.about
      })
    })
  }

  render() {
    const { classes, ...rest } = this.props;
    const { id, name, about } = this.state;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    
    
    return (
      <div>
        <HeaderHome/>

        <Parallax small filter image={require("assets/img/bg8.jpg")}/>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{name}</h3>
                      <Link to={{
                        pathname: "/edit-profile-page",
                        state: { id: id}
                      }} 
                      >
                        <Button variant="fab" mini aria-label="edit" className={classes.buttonedit}>
                          <Icon>edit_icon</Icon>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  {about}
                </p>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="montecarlo"
                    tabs={[
                      {
                        tabButton: "My Story",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer className={classes.mystorycontainer} >
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "My Library",
                        tabIcon: Library,
                        tabContent: (
                          <GridContainer className={classes.mystorycontainer} >
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3} >
                              <Book/>
                            </GridItem>
                          </GridContainer>
                        )
                      },
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
