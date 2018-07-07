/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


// core components
import Button from "components/CustomButtons/Button.jsx";


import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;

  return (
    
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
          <NavHashLink to="/#about" scroll={el => el.scrollIntoView({behavior: "smooth"})}>
            <Button
                color="transparent" 
                className={classes.navLink}
              >
                  {props.navLink1}
              </Button>
          </NavHashLink>
          </ListItem>
          <ListItem className={classes.listItem}>
          <NavHashLink to="/#discover" scroll={el => el.scrollIntoView({behavior: "smooth"})}>
            <Button
                color="transparent" 
                className={classes.navLink}
              >
                {props.navLink2}
              </Button>
          </NavHashLink>
          </ListItem>
          <ListItem className={classes.listItem}>
          <NavHashLink to="/#inspiration" scroll={el => el.scrollIntoView({behavior: "smooth"})}>
            <Button
              color="transparent" 
              className={classes.navLink}
            >
              {props.navLink3}
            </Button>
          </NavHashLink>
          </ListItem>
          <ListItem className={classes.listItem}>
          <Link to="/login-page">
            <Button
              color="transparent" 
              className={classes.navLink}
            >
              {props.navLink4}
            </Button>
          </Link>
          </ListItem>
        </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
