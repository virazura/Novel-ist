import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//components
import HeaderHome from "components/Header/HeaderHome.jsx"
import Grid from "@material-ui/core/Grid";
import StoryList from './StoryList.jsx';
import Chapter from './Chapter.jsx';

//style
import StoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";

class ReadStory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.location.state.id,
            titleChapter: ''
        }
    }

    // get chapter data from storylist
    getChapterData = (editorState) => {
        this.setState({
            content: editorState
        })
    }

    //get title chapter data from storylist
    getTitleData = (titleChapter) => {
        this.setState({
            titleChapter: titleChapter
        })
    }
    
    render(){
        const { classes, ...rest } = this.props;
        const { content, id, titleChapter} = this.state;
        
        return(
            <div>
                <HeaderHome/>
                <div className={classes.storylistcontainer}>
                    <Grid container spacing={24} >
                        <Grid item xs={4} sm={12} lg={3}>
                            <StoryList id={id}
                            handleChapterData={this.getChapterData}
                            handleTitleData={this.getTitleData}
                            />
                        </Grid>
                        <Grid item xs={8} sm={12} lg={9} className={classes.chaptercontent}>
                            <Chapter content={content} titleChapter={titleChapter} />
                        </Grid>
                    </Grid>
                </div>
                
            </div>
        );
    }
}

export default withStyles(StoryStyle)(ReadStory);

