import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
import Likes from "./FavoriteButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
//icons
import Eye from "@material-ui/icons/RemoveRedEye";
import List from "@material-ui/icons/List";
import Copy from "@material-ui/icons/Copyright";
import Setting from "@material-ui/icons/MoreVert";


// style
import bookStyle from "assets/jss/material-kit-react/components/bookStyle.jsx";



function Transition(props){
    return <Slide direction="down" {...props}/>
}

const ITEM_HEIGHT = 20;

class Book extends React.Component  {
    constructor(props){
        super(props);
        this.state={
            open: false,
            bookId: this.props.id_book,
            visit: false,
            cover: "", 
            anchorEl: null
        }
    }

    
    handleClickOpen = () => {
    this.setState({ open: true });
    fetch('http://localhost:3001/get-book-data', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_book: this.state.bookId,
            })
        })
        .then(response => response.json())
        .then( data => {
            if(data){
                this.handleBookData(data)
            }
        })
    };

    handleClose = () => {
    this.setState({ open: false });
    };

    handleSetting = (event) => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleSettingClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    //delete bok
    handleDeleteBook = () => {
        fetch('http://localhost:3001/delete-book',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_book: this.state.bookId
            })
        })
        .then( res => res.json())
        .then( del => {
            console.log(del)
            this.setState({
                isDeleted: true
            })
            console.log('isdeleted', this.state.isDeleted)
            this.props.isDeleted(this.state.bookId)
        })
        
    }

    //handle book data
    handleBookData = (data) => {
        this.setState({
            titleBook: data.title,
            description: data.description,
            mature: data.mature,
            cover: data.cover
        })
    }


    componentDidMount(){
        this._isMounted = true;
        fetch('http://localhost:3001/get-book-data', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_book: this.state.bookId,
            })
        })
        .then(response => response.json())
        .then( data => {
            if(this._isMounted){
                this.handleBookData(data)
            }
            fetch('http://localhost:3001/total-chapter', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id_book: this.state.bookId,
                })
            })
            .then(res => res.json())
            .then( totalChapter => {
                if(this._isMounted){
                    this.setState({
                        totalChapter: totalChapter
                    })
                }
                fetch('http://localhost:3001/views',{
                    method: 'post',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        id_book: this.state.bookId,
                    })
                })
                .then( res => res.json())
                .then( view => {
                    if(this._isMounted){
                        this.setState({ views: view })
                    }
                })
            })
           
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }


    render(){
        const { classes, id } = this.props;
        const {titleBook, description, mature, cover, bookId, totalChapter, visit, views, anchorEl} = this.state;
        const open = Boolean(anchorEl);
        
        
    return(
        <div className={classes.booklist}>
            <Card className={classes.card} >
                <CardHeader
                    avatar={
                        <Avatar aria-label="Author" className={classes.avatar}>
                            AVA
                        </Avatar>
                    }
                    title={titleBook}
                />
                <CardMedia 
                    className={classes.media}
                    title={titleBook}
                    image={`http://localhost:3001/${cover}`} 
                    onClick={this.handleClickOpen}
                />
                <CardActions className={classes.cardac}>
                    <Eye  className={classes.icon} /> 
                        <p className={classes.iconText}>{views}</p>
                    <Likes id_book={bookId}/>
                    <List  className={classes.icon} />
                        <p className={classes.iconText}>{totalChapter} </p>
                    <IconButton 
                        className={classes.likes}
                        aria-label="More"
                        aria-owns={ open ? 'menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleSetting}
                    >
                        <Setting className={classes.icon}/>
                    </IconButton>
                    <Menu
                        id="menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={this.handleSettingClose}
                        PaperProps={{
                            style:{
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: 90
                            }
                        }}
                    >
                        <MenuItem className={classes.menuitem} onClick={this.handleSettingClose}>
                            <Link to={{
                                pathname: '/chapter-info',
                                state: {id_book: bookId, id:id}
                            }}>
                            <Button>Edit</Button>
                            </Link>
                        </MenuItem>
                        <MenuItem  className={classes.menuitem} onClick={this.handleSettingClose}>
                            <Button onClick={this.handleDeleteBook}>Delete</Button>
                        </MenuItem>
                    </Menu>
                </CardActions>
            </Card>
            
            {/* Dialog */}
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    maxWidth="sm"
                    TransitionComponent={Transition}
                    
                >
                    <DialogContent>
                        <img src={`http://localhost:3001/${cover}`} alt="title" className={classes.imgDialog}/> 
                        <DialogTitle id="alert-dialog-title" className={classes.titleBook}>{titleBook}</DialogTitle>
                        <div className={classes.dialogAuthor}>
                            <Avatar className={classes.avatar}>AVA</Avatar>
                            <Typography className={classes.typoAuthor}>Author</Typography>
                        </div>
                        <DialogContentText id="alert-dialog-description"> 
                            
                            <Typography align="justify" variant="caption">
                                {description}
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
                            { (mature === false) ? " " : <small>Mature Content</small>}
                    </DialogContent>
                    <DialogActions className={classes.dialogButton}>
                            <Link
                                to={{
                                    pathname: `/read-story`,
                                    state:{
                                        id_book: bookId,
                                        id: id, 
                                        visit: visit
                                    }
                                }}
                            >
                            <Button  variant="contained" size="small" className={classes.readbutton} >
                            Read
                            </Button>
                            </Link>
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
