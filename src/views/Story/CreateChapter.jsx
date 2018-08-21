import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Footer from "components/Footer/Footer.jsx";
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import  TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import HeaderHome from "components/Header/HeaderHome.jsx"

//react wysiwyg
import {Editor} from 'react-draft-wysiwyg';
import { EditorState , convertToRaw, convertFromRaw} from 'draft-js';

// style
import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class CreateChapter extends React.Component {
    constructor(props){
      super(props);
      this.state={
        // editorState: EditorState.createWithContent(convertFromRaw(JSON.parse(content))),
        titleChapter: "",
        editorState: EditorState.createEmpty(),
        saved: 'saved',
        published: 'published',
        id: this.props.location.state.id,
        errorSaving: '',
        isSaved: false
      }
    }

    // handle editor change
    onEditorStateChange = (editorState) => {
        this.setState({ editorState })
    }

    //handle title change
    onTitleChange = (event) => {
        this.setState({
            titleChapter: event.target.value
        })
    }


    //load data chapter saved
    loadChapterSaved = (data) => {
        this.setState({
            titleChapter: data.titleChapter,
            editorState: data.editorState
        })
    }

    //load data chapter published
    loadChapterPublished = (data) => {
        this.setState({
            titleChapter: data.titleChapter,
            editorState: data.editorState,
            status: 'published'
        })
    }

    //save data
    onSaveData = () => {
        const convertedData = convertToRaw(this.state.editorState.getCurrentContent());
        fetch('http://localhost:3001/new-chapter', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                editorState: convertedData,
                titleChapter: this.state.titleChapter,
                status: this.state.saved
            })
        })
        .then( response => response.json())
        .then( chapter => {
            if( chapter === 'empty input'){
                this.setState({
                    errorSaving: 'Please fill Title Chapter and Content'
                })
            }else{
                this.loadChapterSaved(chapter);
                this.setState({
                    isSaved: true
                })
            }
        })
    }
    
    //published data
    onPublishData = () => {
        const convertedData = convertToRaw(this.state.editorState.getCurrentContent());
        fetch('http://localhost:3001/new-chapter',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                editorState: convertedData,
                titleChapter: this.state.titleChapter,
                status: this.state.published              
            })
        })
        .then(response => response.json())
        .then( chapter => {
            if(chapter === 'empty input'){
                this.setState({
                    errorSaving: 'Please fill Title Chapter and the Content'
                })
            }else{
                this.loadChapterPublished(chapter);
                this.setState({
                    isSaved: true
                })
            }
        })
    }


    render() {
        const { classes, ...rest } = this.props;
        const {editorState, id, errorSaving, isSaved} = this.state;
        if(isSaved === true){
            return <Redirect
                        to={{
                            pathname: "/chapter-info",
                            state: {id : id}
                        }}
                    />
        }
        
        return (
          <div>
            <HeaderHome/>
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
                            onChange={this.onTitleChange}
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
                    {errorSaving ? 
                            <div className={classes.errorSavingChap}>
                                {errorSaving}
                            </div>
                            : 
                            ""
                        }
                    <CardActions className={classes.displaybutton}>
                        <Button size="small" clor="primary" className={classes.buttonnextchap}
                        onClick={this.onSaveData}>
                            Save
                        </Button>
                        <Button size="small" clor="primary" className={classes.buttonnextchap}
                        onClick={this.onPublishData}>
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
