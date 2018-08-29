import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
//component
import IconButton from "@material-ui/core/IconButton";

//icon
import FavoriteAll from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

//style
import bookStyle from "assets/jss/material-kit-react/components/bookStyle.jsx";

class Likes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            likes: 0,
            updated: false,
            id_book: this.props.id_book
        }
    }

    updateLikes = () => {
        if(!this.state.updated){
            this.setState( (prevState, props) => {
                return{
                    likes: prevState.likes + 1,
                    updated: true
                };
            });
            
        }else{
            this.setState( (prevState, props) => {
                return{
                    likes: prevState.likes - 1,
                    updated: false
                }
            });
        }
        fetch('http://localhost:3001/insert-likes', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_book: this.state.id_book,
                updated: this.state.updated
            })
        })
        .then( response => response.json())
        .then( like => {
            this.setState({
                likes: like
            })
        })
    }

    componentDidMount(){
        this._isMounted = true;
        fetch('http://localhost:3001/likes', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id_book: this.state.id_book
            })
        })
        .then(res => res.json())
        .then( like => {
            if(this._isMounted){
                this.setState({ likes: like})
            }
        })
    }

    componentWillUnmount(){
        this._isMounted = false;
    }

    render(){
        const { classes } = this.props;
        const {updated, likes} = this.state;

        return(
            <div>
                <IconButton
                    aria-label="Toggle like button"
                    onClick={this.updateLikes}
                    className={classes.likes}
                >
                    {updated ? <Favorite/> : <FavoriteAll/>}
                    <p className={classes.iconTextFav}>{likes}</p>
                </IconButton>
            </div>
        )
    }
}

Likes.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string
}

export default withStyles(bookStyle)(Likes);