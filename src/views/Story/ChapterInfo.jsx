import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components
import Footer from "components/Footer/Footer.jsx";
import TableChapter from "./TableChapter.jsx";
import Button from "@material-ui/core/Button";
import HeaderHome from "components/Header/HeaderHome.jsx"

//icon
import AddIcon from "@material-ui/icons/Add";

import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";

class ChapterInfo extends React.Component {
    constructor(props){
      super(props);
      this.state={
        isDelete: false
      }
    }

    //check if table deleted
    isDeleted = (isDelete) => {
      this.setState({isDelete})
    } 

    render() {
        // eslint-disable-next-line
        const { classes, ...rest } = this.props; 
        const { id_chapter, id, id_book } = this.props.location.state;
        console.log("info",this.state.isDelete)
        return (
          <div>
            <HeaderHome id={id}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <div className={classes.storymargin}>
                  <h2 className={classes.title}>Chapter Information</h2>
                  <div className={classes.tablescontainer}>
                    <Link to={{
                      pathname: '/create-chapter',
                      state: {id : id, id_book: id_book}
                    }}
                    >
                      <Button variant="fab" aria-label="add" className={classes.buttonadd}>
                          <AddIcon/>
                      </Button>
                    </Link>
                    <TableChapter id={id} id_book={id_book} id_chapter={id_chapter} onDelete= {this.isDelete}/>
                  </div>
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

export default withStyles(createStoryStyle)(ChapterInfo);
