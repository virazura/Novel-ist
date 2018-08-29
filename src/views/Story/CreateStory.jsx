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
        selectedFile : '', 
        imagePreviewUrl: '',
        imageData: '',
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

    //handle image change
    handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () =>{
            this.setState({
                selectedFile:file,
                imagePreviewUrl: reader.result
            });
        };
        reader.readAsDataURL(file);
        this.handleUploadCover(e.target.files[0]);
    }

    //upload cover
    handleUploadCover = (file) => {
        let form = new FormData(this.refs.myForm);
        form.append('myImage', file);
        fetch('http://localhost:3001/upload-cover', {
            method: 'post',
            body: form
        })
        .then( res =>res.json())
        .then(data => {
            this.setState({
                imageData: data.file
            })
            
        })
    };

    //update user story
    loadStory = (data) => {
        this.setState({
            title: data.title,
            category: data.category,
            description: data.description,
            mature: data.mature,
            imageData: data.cover
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
                mature: this.state.mature,
                imageData: this.state.imageData
            })
        })
        .then( response => response.json())
        .then( story => {
            if( story === 'empty input'){
                this.setState({
                    errorSaving: 'Please fill all the fields'
                })
            }else{
                this.loadStory(story);
                this.setState({
                    saved: true,
                    id_book: story.id_book
                })
            }
        })
    } 

    render(){
        // eslint-disable-next-line
        const { classes, ...rest } = this.props;   
        const {category, id, id_book, errorSaving, saved, imagePreviewUrl} = this.state;
        
        let $imagePreview = null;
        if(imagePreviewUrl){
            $imagePreview = <img style={{width: "100%", height: "100%"}} src={imagePreviewUrl} alt='cover'/>;
        }else{
            $imagePreview = (
                <div className={classes.previewText}>Please select cover</div>
            );
        }

        if(saved === true){
            return <Redirect 
            to={{
                pathname: "/create-chapter",
                state: {id: id, id_book : id_book}
            }} />
        }
        
        return (
          <div>
            <HeaderHome id={id}/>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                
                <div className={classes.storymargin}>
                <h2 className={classes.title}>Make A New Story</h2>
                <Card className={classes.storycontainer}>
                    <CardContent>
                        <div className={classes.imgPreview}>{$imagePreview}</div>
                            <form ref='myForm' encType='multipart/form-data'>
                                <input 
                                    accept="image/*"
                                    className={classes.input}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={ e => this.handleImageChange(e)}
                                />
                            </form>
                            <label htmlFor="raised-button-file">
                                <Button component="span" className={classes.buttonupload}>
                                Choose Image
                                </Button>
                            </label>
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
