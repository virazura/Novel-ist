import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//components
import HeaderHome from "components/Header/HeaderHome.jsx"
import Grid from "@material-ui/core/Grid";
import StoryList from './StoryList';
import Chapter from './Chapter';

//style
import StoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";


class ReadStory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // id: this.props.location.state.id,
            titleChapter: '',
            visit : !this.props.location.state.visit
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

    //insert view
    componentDidMount(){
        this._isMounted = true;
        fetch('http://localhost:3001/insert-views', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_book: this.props.location.state.id_book,
                visit: this.state.visit
            })
        })
        .then(res => res.json())
        .then( view => {
            if(this._isMounted){
                this.setState({
                    view
                })
            }
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }
    
    render(){
        // eslint-disable-next-line
        const { classes, ...rest } = this.props; 
        const { content, titleChapter} = this.state;
        const {id_book, id} = this.props.location.state;
        
        return(
            <div>
                <HeaderHome id={id}/>
                <div className={classes.storylistcontainer}>
                    <Grid container spacing={24} >
                        <Grid item xs={4} sm={12} lg={3}>
                            <StoryList id_book={id_book}
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

