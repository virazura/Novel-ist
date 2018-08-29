import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//component
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider"

//style
import StoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";

class StoryList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedChapter: "",
            id_book: this.props.id_book,
            titleChapterList: [],
            titleStory: '',
            // content: []
            
        }
    }


    //get data for title chapter
    componentDidMount(){
        fetch('http://localhost:3001/story-list',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id_book: this.state.id_book,                   
        })
        })
        .then(response => response.json())
        .then( data => {
            console.log(data)
            this.setState({
                titleChapterList: data.titleChapter,
                titleStory: data.titleStory
            })
        })
    }

    // get data for title chapter and chapter content
    onSelectedChapter = () => {
        fetch('http://localhost:3001/content',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            id_book: this.state.id_book, 
            chapter: this.state.selectedChapter                  
        })
        })
        .then(response => response.json())
        .then( content => {
            this.setState({
                content: content
                // editorState: EditorState.createWithContent(convertFromRaw(content))
            })
            this.props.handleChapterData(this.state.content);
            this.props.handleTitleData(this.state.selectedChapter)
        })
    }

    //get chapter
    getChapter = (e, chapter) => {
        this.setState({
            selectedChapter: chapter
        }, () => this.onSelectedChapter())
    }

    
    render(){
        const {classes} = this.props;
        const {titleChapterList, titleStory} = this.state;
        
        const storyList = titleChapterList.map( (title, i) => {
            return (
                <div key={`item-${title}-${i}`}>
                    <ListItem 
                        onClick={(e) => this.getChapter(e, title)}
                        className={ classes.listchapter}
                        >
                            <ListItemText primary={title}/>
                    </ListItem>
                    <Divider component='hr'/>
                </div>
            )
        })

        return(
            <div>
                <List className={classes.list} subheader={<li/>} component="nav">
                    <div className={classes.subheadercontainer}>
                        <ListSubheader className={classes.subheader}>{titleStory}</ListSubheader>
                    </div>
                    {storyList}
                </List>
            </div>
        )
    }
}

export default withStyles(StoryStyle)(StoryList);