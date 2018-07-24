import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionAbout from "./Sections/SectionAbout.jsx";
import SectionDiscover from "./Sections/SectionDiscover.jsx";
import SectionInspiration from "./Sections/SectionInspiration.jsx";
import landingPageStyle from "assets/jss/material-kit-react/views/landingPageStyle.jsx";



class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    
    return (
      <div>
        <Header
          brand="Novel-ist"
          rightLinks={<HeaderLinks 
            navLink1="About" navLink2="Discover" navLink3="Inspiration" navLink4="Login"/>}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "montecarlo"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/pic1.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h3 className={classes.subtitle}>
                    <p>Books give the soul to the universe</p>
                    <p> wings to the mind</p>
                    <p> flight to the imagination</p>
                    <p> and life to everything </p>
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <SectionAbout />
          <SectionDiscover/>
          <SectionInspiration />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
