import React from "react";
import Pagination from "react-js-pagination";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";



//Components
import Book from "components/Books/Book.jsx";

//styles
import discoverStyle from "assets/jss/material-kit-react/views/componentsSections/discoverStyle.jsx";


class SectionDiscover extends React.Component{
    constructor(props){
        super(props);
        this.state={
          activePage: 1
        }
      }

    //handle page 
    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`)
        this.setState({
          activePage: pageNumber
        })
      }
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
                    
                    
                </div>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange}
                    innerClass={classes.innerClass}
                    itemClass={classes.itemClass}
                    linkClass={classes.linkClass}
                    activeClass={classes.activeClass}
                    activeLinkClass={classes.activeLinkClass}
                  />
                
            </div>
        );
    }
}

export default withStyles(discoverStyle)(SectionDiscover);