import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Library from "@material-ui/icons/LibraryBooks";
import Palette from "@material-ui/icons/Palette";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Book from "components/Books/Book.jsx";

import profile from "assets/img/faces/christian.jpg";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";


class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    
    return (
      <div>
        <Header
          color="transparent"
          brand="Novel-list"
          rightLinks={<HeaderNavLinks navLink1="Story" navLink2="Create Story" />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "montecarlo"
          }}
          {...rest}
        />
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
                      <h3 className={classes.title}>Christian Louboutin</h3>
                      <Button variant="fab" mini aria-label="edit" className={classes.buttonedit}>
                        <Icon>edit_icon</Icon>
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  An artist of considerable range, Chet Faker — the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                  performs and records all of his own music, giving it a warm,
                  intimate feel with a solid groove structure.{" "}
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
