import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// Core Components
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ImageResults from "./ImageResults.jsx";


// Style
import generatorStyle from "assets/jss/material-kit-react/components/generatorStyle.jsx";


class FindPicture extends React.Component{

    constructor(props){
        super(props);
        this.state={
            searchText: "",
            amount: 15,
            picApi: "https://pixabay.com/api",
            picApiKey: "9437479-9b46d1ad043fa89a5f731201d",
            images: []
        }
    }
        //Search Images
        onTextChange = e => {
            const val = e.target.value;
            this.setState({
                [e.target.name] : val
            }, () => {
                if( val === ""){
                    this.setState({
                        images: []
                    })
                }else{ 
                    fetch(`${this.state.picApi}/?key=${this.state.picApiKey}&q=${this.state.searchText}&image_type=all&per_page=${this.state.amount}&width=200px&height=150px&safesearch=true`)
                        .then(res => res.json())
                        .then( img => {
                            this.setState({ images: img.hits})
                        })
                        .catch( err => console.log(err))
                        
                }
            });
        };

        // Change amount of picture
        onAmountChange = (event) => {
            this.setState({ [event.target.name]: event.target.value})
        }
    

    render(){
        const { classes } = this.props;
        const { amount, searchText  } = this.state;
    
        return(
            <div className={classes.findpiccontainer}>
                <div className={classes.searchpic}>
                    <TextField 
                        name="searchText"
                        value={searchText}
                        onChange={this.onTextChange}
                        label="Search For Images"
                        placeholder="Search For Images"
                        margin="normal"
                        className={classes.searchtext}
                    />
                    <FormControl>
                        <InputLabel htmlFor="amount-pic">Amount</InputLabel>
                        <Select
                            value={amount}
                            onChange={this.onAmountChange}
                            name= 'amount'
                        
                        >   
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={80}>80</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <br/>
                {this.state.images.length > 0 
                ?
                ( <ImageResults images={this.state.images} searchText={searchText}/>) 
                : 
                null
                }
            </div>
    
    
        );  
    }
}


FindPicture.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(generatorStyle)(FindPicture);