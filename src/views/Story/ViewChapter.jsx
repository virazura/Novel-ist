import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//components
import HeaderHome from "components/Header/HeaderHome.jsx"
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Chapter from './Chapter';

//style
import StoryStyle from "assets/jss/material-kit-react/views/readStoryStyle.jsx";


class ViewChapter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: this.props.location.state.id,
            id_book: this.props.location.state.id_book,
            titleChapter: '',
        }
    }

    componentDidMount(){
        fetch("http://localhost:3001/view-chapter", {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                id_chapter: this.props.location.state.idChapter,
                id_book: this.state.id_book,
                titleCh: this.props.location.state.titleCh
            })
        })
        .then( response => response.json())
        .then( data => {
            this.setState({
                title: data.title,
                titleChapter: data.titlechapter,
                content: data.content
            })
        });
    }
    
    render(){
        // eslint-disable-next-line
        const { classes, ...rest } = this.props; 
        const { content, id, id_book,  title, titleChapter} = this.state;
        
        return(
            <div>
                <HeaderHome id={id} id_book={id_book}/>
                <div className={classes.storylistcontainer}>
                    <Grid container spacing={24} >
                        <Grid item xs={4} sm={12} lg={3}>
                            <List 
                            className={classes.list} subheader={<li/>} component="nav">
                            <div className={classes.subheadercontainer}>
                                <ListSubheader className={classes.subheader}>{title}</ListSubheader>
                            </div>
                            {titleChapter}
                            </List>
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

export default withStyles(StoryStyle)(ViewChapter);

