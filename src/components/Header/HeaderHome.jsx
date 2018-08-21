import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// react components for routing our app without refresh
import { Link, Redirect } from "react-router-dom";
//component
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
//icons
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

//style 
import headerHomeStyle from "assets/jss/material-kit-react/components/headerHomeStyle.jsx";

class HeaderHome extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.id
        }
    }
    // handle menu account
    handleMenuAccount = event => {
    this.setState({anchorEl: event.currentTarget})
    }

    //handle Close
    handleClose = () => {
    this.setState({ anchorEl : null})
    }
    
    render(){
        const { classes,idUser, ...rest } = this.props;
        const { id } = this.state;
        
        return(
            <div className={classes.root}>
                <AppBar position="static" className={classes.appbar}>
                <Toolbar>
                    <IconButton className={classes.menuButton} aria-label="Menu">
                    <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" className={classes.brand}>
                    Nove-list
                    </Typography>
                        <Link to={{
                            pathname: '/home',
                            state: {id:id}}}
                            className={classes.hoverNavigation}
                        >
                            <Button>Story</Button>
                        </Link>
                        <Link to={{
                            pathname: '/create-new-story',
                            state: {id:id}}}
                            className={classes.hoverNavigation}
                        >
                            <Button>Create Story</Button>
                        </Link>
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <CustomDropdown
                                    noLiPadding
                                    buttonIcon={AccountCircle}
                                    buttonProps={{
                                        className: classes.navLink,
                                        color: "transparent"
                                    }}
                                    dropdownList={[
                                        <Link to={{
                                            pathname:"/profile-page",state: {id: id}}} className={classes.dropdownLink}>
                                            Profile
                                        </Link>,
                                        <Link to="/" className={classes.dropdownLink}>
                                            Logout
                                        </Link>
                                    ]}
                                />
                            </ListItem>
                        </List>
                </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(headerHomeStyle)(HeaderHome);
