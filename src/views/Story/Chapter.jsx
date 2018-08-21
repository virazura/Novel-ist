import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//component
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography"
import draftToHtml from "draftjs-to-html";

//style
import readStoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";

class Chapter extends React.Component{

    

    render(){
        const {classes, content, titleChapter} = this.props;
        
        return(
            <div className={classes.chapter}>
                    <Paper className={classes.paper}>
                           <Typography variant="title" align="center"> {titleChapter}</Typography>
                            <br/>
                            <br/>
                            
                            <div dangerouslySetInnerHTML={{__html: draftToHtml(content)}}>
                            </div>
                    </Paper>
            </div>
        )
    }
}

export default withStyles(readStoryStyle)(Chapter);