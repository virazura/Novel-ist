import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// react components for routing our app without refresh
//component
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
//icons
import MenuIcon from "@material-ui/icons/Menu";

//style 
import headerHomeStyle from "assets/jss/material-kit-react/components/headerHomeStyle.jsx";

class EmptyHeader extends React.Component{
    
    render(){
        // eslint-disable-next-line
        const { classes, ...rest } = this.props;
        
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
                </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(headerHomeStyle)(EmptyHeader);
