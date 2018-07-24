import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//components
import Header from "components/Header/Header.jsx";
import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";
import Grid from "@material-ui/core/Grid";
import StoryList from "./StoryList.jsx";
import Chapter from "./Chapter.jsx";

//style
import StoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";

class ReadStory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            chapter: ""
        }
    }

    // get chapter data from storylist
    getChapterData = (chapter) => {
        this.setState({
            chapter
        })
    }
    
    render(){
        const { classes, ...rest } = this.props;
        const { chapter} = this.state;
        
        return(
            <div>
                <Header
                    color="montecarlo"
                    brand="Novelist"
                    rightLinks={<HeaderNavLinks navLink1="Story" navLink2="Create Story" />}
                    fixed
                    {...rest}
                />
                <div className={classes.storylistcontainer}>
                    <Grid container spacing={24} >
                        <Grid item xs={4} sm={12} lg={3}>
                            <StoryList 
                            onSelectChapter={this.getChapterData}
                            />
                        </Grid>
                        <Grid item xs={8} sm={12} lg={9} className={classes.chaptercontent}>
                            <Chapter chapter={chapter} />
                        </Grid>
                    </Grid>
                </div>
                
            </div>
        );
    }
}

export default withStyles(StoryStyle)(ReadStory);

