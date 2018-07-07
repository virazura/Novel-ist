/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// icons
import AccountCircle from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton"

// core components
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";


import headerNavLinkStyle from "assets/jss/material-kit-react/components/headerNavLinkStyle.jsx";

function HeaderNavLinks({ ...props }) {
  const { classes } = props;

  return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
            <Button
                color="transparent" 
                className={classes.navLink}
                >
                    {props.navLink1}
                </Button>
            
            </ListItem>
            <ListItem className={classes.listItem}>
            
            <Button
                color="transparent" 
                className={classes.navLink}
                >
                {props.navLink2}
                </Button>
            
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
                        <Link to="/profile" className={classes.dropdownLink}>
                            Profile
                        </Link>,
                        <Link to="/logout" className={classes.dropdownLink}>
                            Logout
                        </Link>
                    ]}
                />
            
            </ListItem>
    </List>

  );
}

export default withStyles(headerNavLinkStyle)(HeaderNavLinks);