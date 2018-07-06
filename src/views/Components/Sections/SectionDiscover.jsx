import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";



//Components
import Book from "components/Books/Book.jsx";
import Button from 'components/CustomButtons/Button.jsx';


//styles
import discoverStyle from "assets/jss/material-kit-react/views/componentsSections/discoverStyle.jsx";




class SectionDiscover extends React.Component{

    render(){
        const {classes } = this.props;
        return(
            <div className={classNames(classes.main,classes.mainRaised)} id="discover">
                <h2 className={classes.title}>Discover</h2> 
                <div className={classes.booklist}>
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                    
                </div>
                <Button color="coral" round className={classes.btnDiscover}>
                        See More
                </Button>
                
            </div>
        );
    }
}

export default withStyles(discoverStyle)(SectionDiscover);