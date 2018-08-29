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
// import Header from "components/Header/Header.jsx";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import ButtomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Footer from "components/Footer/Footer.jsx";
import Scroll from "components/Scroll/Scroll";

// own component
import DisplayBook from "components/Books/DisplayBook.jsx";

//icon
import Search from "@material-ui/icons/Search"
import Visibility from "@material-ui/icons/Visibility";
import Favorite from "@material-ui/icons/Favorite";
import RestoreIcon from "@material-ui/icons/Restore";


import homeStyle from "assets/jss/material-kit-react/views/homeStyle.jsx";
import HeaderHome from "components/Header/HeaderHome.jsx";

class Home extends React.Component {
    constructor(props){
      super(props);
      this.state={
        activePage: 3,
        value: 0,
        id: this.props.location.state.id, 
        idBook: [],
        title: "",
        searchBook: ''
      }
    }


    loadIdBook = (data) => {
      this.setState({
        idBook: data.id_book
      })
    }

    componentDidMount(){
      this._isMounted = true;
      fetch('http://localhost:3001/display-book', {
        method: 'post', 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          value: this.state.value
        })
      })
      .then(response => response.json())
      .then( data => {
        this.loadIdBook(data)
      })
    }

    componentWillMount(){
      this._isMounted = false;
    }

    handleChangeBottomNav = (event, value) => {
      this.setState({value })
      this.renderBook(value)
      if(value === 0){
        this.setState({ title: "Popular"})
      }else if(value === 1){
        this.setState({ title: "Most Likes"})
      }else{
        this.setState({ title: "Newest"})
      }
    }

    //render book
    renderBook = (value) => {
      fetch('http://localhost:3001/display-book', {
        method: 'post', 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
          value: value
        })
      })
      .then(response => response.json())
      .then( data => {
        this.loadIdBook(data)
      })
    }

    
    render() {
        // eslint-disable-next-line
        const { classes, ...rest } = this.props; 
        const {id, value, idBook} = this.state;

        const displaybook = idBook.map( (id_book, i) => {
          return <DisplayBook key={`id_book-${i}`} id_book={id_book} id={this.state.id}/>
        })
        
        return (
          <div>
            <HeaderHome id={id}/>
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
                      value={value}
                      onChange={this.handleChangeBottomNav}
                    >
                      <BottomNavigationAction className={classes.iconbottom} label="Popular" icon={<Visibility/>}/>
                      <BottomNavigationAction className={classes.iconbottom} label="Most Likes" icon={<Favorite/>}/>
                      <BottomNavigationAction className={classes.iconbottom} label="Newest" icon={<RestoreIcon/>}/>
                    </ButtomNavigation>
                </div>

                <h2 className={classes.title}>Collection of Books</h2>
                <div> className={classes.bookcontainer}>
                <Scroll>
                  {displaybook}
                </Scroll>
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

export default withStyles(homeStyle)(Home);
