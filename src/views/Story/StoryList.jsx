import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";


//component
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//style
import StoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";

class StoryList extends React.Component{
    state={
        selectedChapter: "",
    }

    //get chapter
    getChapter = (e, chapter) => {
        this.setState({
            selectedChapter: chapter
        })
        this.props.onSelectChapter(chapter)
    }

    
    render(){
        const {classes} = this.props;
        return(
            <div>
                <List className={classes.list} subheader={<li/>} component="nav">
                    <div className={classes.subheadercontainer}>
                        <ListSubheader className={classes.subheader}> Lorem ipsum dolor sit amet consectetur adipisicing. </ListSubheader>
                    </div>
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(section => (
                        <ListItem button 
                        key={`item-${section}`} 
                        onClick={((e) => this.getChapter(e, section))}
                        className={ classes.listchapter}
                        >
                            <ListItemText primary={`${section}. ${section}`} />
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

export default withStyles(StoryStyle)(StoryList);