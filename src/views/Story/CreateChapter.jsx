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
import  TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";

//react wysiwyg
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from "draft-js";




// style
import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class CreateChapter extends React.Component {
    constructor(props){
      super(props);
      this.state={
        editorState: EditorState.createEmpty()
      }
    }

    //handle editor change
    onEditorStateChange = (editorState) =>{
        this.setState({
            editorState
        })
    }
    

    render() {
        const { classes, ...rest } = this.props;
        const {editorState} = this.state;
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
                <h2 className={classes.title}>New Chapter</h2>
                <Card className={classes.chaptercontainer}>
                    <CardContent>
                        <TextField 
                            fullWidth
                            label=" New Chapter Title"
                            id="chapter-title"
                            InputProps={{
                                disableUnderline: true,
                                classes:{
                                    input: classes.titleinput
                                }
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: classes.titleformlabel
                            }}
                            margin="normal"
                        />
                    
                    <Editor 
                        editorState={editorState}
                        wrapperClassName={classes.homewrapper}
                        editorClassName={classes.homeeditor}
                        toolbarClassName={classes.toolbar}
                        placeholder="Begin typing..."
                        onEditorStateChange={this.onEditorStateChange}
                    />
                    </CardContent>
                    <CardActions className={classes.displaybutton}>
                        <Button size="small" clor="primary" className={classes.buttonnextchap}>
                            Save
                        </Button>
                        <Button size="small" clor="primary" className={classes.buttonnextchap}>
                            Publish
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

export default withStyles(createStoryStyle)(CreateChapter);
