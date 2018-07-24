import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// nodejs library that concatenates classes
// import classNames from "classnames";
// core components
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions  from "@material-ui/core/DialogActions";
import Button from '@material-ui/core/Button';
import Slide from "@material-ui/core/Slide";
import Typography from "@material-ui/core/Typography";
import Muted from "components/Typography/Muted.jsx";


//icons
import Star from "@material-ui/icons/Star";
import Eye from "@material-ui/icons/RemoveRedEye";
import List from "@material-ui/icons/List";
import Copy from "@material-ui/icons/Copyright";
import Add from "@material-ui/icons/Add";


// style
import bookStyle from "assets/jss/material-kit-react/components/bookStyle.jsx";
import image from 'assets/img/bg.jpg';


function Transition(props){
    return <Slide direction="down" {...props}/>
}

class Book extends React.Component  {
    state = {
        open: false,
      };
    
    handleClickOpen = () => {
    this.setState({ open: true });
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    render(){
        const { classes } = this.props;
    return(
        <div className={classes.booklist}>
            <Card className={classes.card} onClick={this.handleClickOpen}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="Author" className={classes.avatar}>
                            AVA
                        </Avatar>
                    }
                    title="Title Book"
                />
                <CardMedia 
                    className={classes.media}
                    image={image}
                    title="title"
                />
                <CardActions className={classes.cardac}>
                    <Eye  className={classes.icon} /> 
                        <p className={classes.iconText}>1</p>
                    <Star  className={classes.icon} /> 
                        <p className={classes.iconText}>1 </p>
                    <List  className={classes.icon} />
                        <p className={classes.iconText}> 1 </p>
                </CardActions>
            </Card>

            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="xs"
                    TransitionComponent={Transition}
                    
                >
                    <DialogContent>
                        <img src={image} alt="title" className={classes.imgDialog}/> 
                        <DialogTitle id="alert-dialog-title" className={classes.titleBook}>{"Title Book"}</DialogTitle>
                        <div className={classes.dialogAuthor}>
                            <Avatar className={classes.avatar}>AVA</Avatar>
                            <Typography className={classes.typoAuthor}>Author</Typography>
                        </div>
                        <DialogContentText id="alert-dialog-description"> 
                            
                            <Typography align="justify" variant="caption">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos non similique itaque, explicabo iure ipsa, officia consequatur, adipisci esse vitae accusamus veritatis doloribus voluptatem. Magni provident possimus maxime ullam exercitationem repellendus eum corrupti at consectetur eligendi laborum, aliquid, repellat id consequuntur iste, non aliquam mollitia tempora cupiditate soluta! Ea, accusamus?
                            </Typography>
                        </DialogContentText>
                            <div className={classes.copyrights}>
                                
                                <Muted className={classes.mutedText.copyrights}>
                                    <Copy  className={classes.iconMuted}/> 
                                <small>
                        
                                    All Rights Reserved
                                </small>
                                </Muted>
                                
                            </div>
                            <small>Mature Content </small>
                    </DialogContent>
                    <DialogActions className={classes.dialogButton}>
                        <Button  variant="contained" size="small" className={classes.readbutton} >
                        Read
                        </Button>
                        <Button variant="contained" size="small" className={classes.addbutton} aria-label="Add">
                            <Add/>
                        </Button>
                    </DialogActions>
                </Dialog>
                </div>
        </div>
    );
    }
    

}

Book.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default withStyles(bookStyle)(Book);