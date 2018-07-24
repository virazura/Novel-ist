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
import TableChapter from "./TableChapter.jsx";
import Button from "@material-ui/core/Button";

import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";

//icon
import AddIcon from "@material-ui/icons/Add";

import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";

class ChapterInfo extends React.Component {
    
    render() {
        const { classes, ...rest } = this.props;
        return (
          <div>
            <Header
                color="montecarlo"
                brand="Novelist"
                rightLinks={<HeaderNavLinks navLink1="Story" navLink2="Create Story" />}
                fixed
                {...rest}
            />
            
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                
                <div className={classes.storymargin}>
                  <h2 className={classes.title}>Chapter Information</h2>
                  <div className={classes.tablescontainer}>
                      <Button variant="fab" aria-label="add" className={classes.buttonadd}>
                          <AddIcon/>
                      </Button>
                    <TableChapter/>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.footer}>
              <Footer />
            </div>
          </div>
        );
      }
}

export default withStyles(createStoryStyle)(ChapterInfo);
