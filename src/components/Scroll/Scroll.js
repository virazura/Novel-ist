import React from 'react';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";
import homeStyle from "assets/jss/material-kit-react/views/homeStyle.jsx";

const Scroll = (props) => {
    const {classes} = props;
    return (
        <div style={{overflowY: 'scroll', border:"1px solid #afdcec", height: "800px",width: "1150px", marginLeft: "0px"}} className={classNames(classes.main, classes.mainRaised)}>
            {props.children}
        </div>
    )
}

export default withStyles(homeStyle)(Scroll);