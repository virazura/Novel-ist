import React from "react";
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
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";

//style
import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";

class UploadCover extends React.Component {
    state = {
        selectedFile : null
    }

    // file upload selected
    fileSelectedHandler = event => {
        this.setState({ selectedFile : event.target.files[0]})
    }

    // file upload handler
    fileUploadHandler = () => {

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
                
                <div className={classes.storymargin}>
                <h2 className={classes.title}>Upload Cover Story</h2>
                <Card className={classes.uploadcontainer}>
                    <CardContent>
                        <input 
                            accept="image/*"
                            className={classes.input}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button component="span" className={classes.buttonupload}>
                            Choose Image
                            </Button>
                        </label>

                    </CardContent>
                    <CardActions>
                        <Button size="small" clor="primary" className={classes.buttonnextup}>
                            Next
                        </Button>
                    </CardActions>
                </Card>
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

export default withStyles(createStoryStyle)(UploadCover);
