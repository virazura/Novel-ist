import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Redirect } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Footer from "components/Footer/Footer.jsx";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import  TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import HeaderHome from "components/Header/HeaderHome.jsx"

//icon
import Checkbox from "@material-ui/core/Checkbox";

import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";

class CreateStory extends React.Component {
    constructor(props){
      super(props);
      this.state={
        title: "",
        category: "",
        description: "",
        mature: false,
        id: this.props.location.state.id,
        saved: false,
        errorSaving: ""
      }
    }

    //handle title change
    handleTitleChange = (event) => {
        this.setState({ title: event.target.value})
    }

    //handle category change
    handleChangeCategory = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    //handle description change
    handleDescriptionChange = (event) => {
        this.setState({ description : event.target.value})
    }

    //handle check mature content
    handleMatureContent = mature => event => {
        this.setState({
            [mature]: event.target.checked
        });
        
    }

    //update user story
    loadStory = (data) => {
        this.setState({
            title: data.title,
            category: data.category,
            description: data.description,
            mature: data.mature
        })
    }

    // save data
    onSaveData = () => {
        fetch('http://localhost:3001/new-story', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                category: this.state.category,
                description: this.state.description,
                mature: this.state.mature
            })
        })
        .then( response => response.json())
        .then( story => {
            if( story === 'empty input'){
                this.setState({
                    errorSaving: 'Please fill Title Chapter and Content'
                })
            }else{
                this.loadStory(story);
                this.setState({
                    saved: true
                })
            }
        })
    } 

    render() {
        const { classes, ...rest } = this.props;
        const {category, id, errorSaving, saved} = this.state;
        
        if(saved === true){
            return <Redirect 
            to={{
                pathname: "/upload-cover-story",
                state: {id: id}
            }} />
        }
        
        return (
          <div>
            <HeaderHome/>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                
                <div className={classes.storymargin}>
                <h2 className={classes.title}>Make A New Story</h2>
                <Card className={classes.storycontainer}>
                    <CardContent>
                        <TextField 
                            fullWidth
                            label="Title"
                            id="title"
                            onChange={this.handleTitleChange}
                            InputProps={{
                                disableUnderline: true,
                                classes:{
                                    input: classes.titleinput
                                }
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: classes.titleformlabel
                            }}
                            margin="normal"
                        />
                        
                        <FormControl className={classes.formcontrol}>
                            <InputLabel htmlFor="Category">Category</InputLabel>
                            <Select
                                value={category  || ''}
                                onChange={this.handleChangeCategory}
                                name="category"
                            >
                                <MenuItem value="FanFinction">Fan Fiction</MenuItem>
                                <MenuItem value="Fantasy">Fantasy</MenuItem>
                                <MenuItem value="Random">Random</MenuItem>
                                <MenuItem value="Romance">Romance</MenuItem>
                                <MenuItem value="ShortStory">Short Story</MenuItem>

                            </Select>
                        </FormControl>

                        <TextField 
                            fullWidth
                            label="Description"
                            id="description"
                            onChange={this.handleDescriptionChange}
                            InputProps={{
                                disableUnderline: true,
                                classes:{
                                    input: classes.descriptioninput
                                }
                            }}
                            InputLabelProps={{
                                shrink: true,
                                className: classes.titleformlabel
                            }}
                            margin="normal"
                            multiline
                        />
                        <FormControl component="fieldset" className={classes.checkbox}>
                            <FormLabel component="legend">Is your story contain mature contain?</FormLabel>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={this.state.mature ? this.state.mature : ''}
                                        onChange={this.handleMatureContent("mature")}
                                        value="mature"
                                    />
                                }
                                label="Mature Content"
                            />
                        </FormControl>
                        
                    </CardContent>
                    <CardActions className={classes.action}>
                        {errorSaving ? 
                            <div className={classes.errorSaving}>
                                {errorSaving}
                            </div>
                            : 
                            ""
                        }
                        <Button size="small" clor="primary" className={classes.buttonnext} onClick={this.onSaveData}>
                            Next
                        </Button>
                    </CardActions>
                </Card>
                </div>
                
                
              </div>
            </div>
            <div className={classes.footer}>
              <Footer />
            </div>
          </div>
        );
      }
}

export default withStyles(createStoryStyle)(CreateStory);
