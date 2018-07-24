/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// icons
import AccountCircle from "@material-ui/icons/AccountCircle";

// core components
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";


import headerNavLinkStyle from "assets/jss/material-kit-react/components/headerNavLinkStyle.jsx";

function HeaderNavLinks({ ...props }) {
  const { classes } = props;

  return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
            <Link to="/home">
                <Button
                    color="transparent" 
                    className={classes.navLink}
                    >
                    {props.navLink1}
                </Button>
            </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            <Link to="/create-new-story">
                <Button
                    color="transparent" 
                    className={classes.navLink}
                    >
                {props.navLink2}
                </Button>
            </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
            </ListItem>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonIcon={AccountCircle}
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    dropdownList={[
                        <Link to="/profile-page" className={classes.dropdownLink}>
                            Profile
                        </Link>,
                        <Link to="/" className={classes.dropdownLink}>
                            Logout
                        </Link>
                    ]}
                />
            
            </ListItem>
    </List>

  );
}

export default withStyles(headerNavLinkStyle)(HeaderNavLinks);