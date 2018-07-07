import React from "react";
import Pagination from "react-js-pagination";

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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import ButtomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import Book from "components/Books/Book.jsx";



//icon
import Search from "@material-ui/icons/Search"
import Visibility from "@material-ui/icons/Visibility";
import Star from "@material-ui/icons/Star";
import RestoreIcon from "@material-ui/icons/Restore";

import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";


import homeStyle from "assets/jss/material-kit-react/views/homeStyle.jsx";



class Home extends React.Component {
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
                <FormControl className={classes.searchBook}>
                  <InputLabel htmlFor="search-book">Search Book</InputLabel>
                  <Input 
                    id="search-book"
                    type="text"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Search Book"
                        >
                          <Search/>
                        </IconButton>
                      </InputAdornment>
                    }
                    />
                </FormControl>
                <div className={classes.pickCategory}>
                    <ButtomNavigation 
                      className={classes.root}
                      showLabels
                    >
                      <BottomNavigationAction className={classes.iconbottom} label="Popular" icon={<Visibility/>}/>
                      <BottomNavigationAction className={classes.iconbottom} label="Highest Rate" icon={<Star/>}/>
                      <BottomNavigationAction className={classes.iconbottom} label="Newest" icon={<RestoreIcon/>}/>
                    </ButtomNavigation>
                </div>

                <h2 className={classes.title}>Popular</h2>
                <div> className={classes.bookcontainer}>
                  <Book/>
                  
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
                  />
                
              </div>
            </div>
            <div className={classes.footer}>
              <Footer />
            </div>
          </div>
        );
      }
}

export default withStyles(homeStyle)(Home);
