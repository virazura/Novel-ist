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
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import HeaderHome from "components/Header/HeaderHome.jsx"

//style
import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";

class UploadCover extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.location.state.id,
            selectedFile : '', 
            imagePreviewUrl: '',
            isUpload: false
        }
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

    //submit cover
    submitCover = () => {
        fetch('http://localhost:3001/submit-cover', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                imageData : this.state.imageData                   
            })
        })
        .then( res => res.json())
        .then( data => {
            if(data){
            this.setState({
                image: data, 
                isUpload: true
            })
            }else{
                this.setState({errorMsg: "No file selected"})
            }
        })
    }
    

    render() {
        const { classes, ...rest } = this.props;
        const { id, imagePreviewUrl, isUpload, errorMsg } = this.state;

        let $imagePreview = null;
        if(imagePreviewUrl){
            $imagePreview = <img style={{width: "100%", height: "100%"}} src={imagePreviewUrl} alt='cover'/>;
        }else{
            $imagePreview = (
                <div className={classes.previewText}>Please select cover</div>
            );
        }

        if(isUpload === true){
            return <Redirect to={{
                pathname: "/create-chapter",
                state: { id: id}
            }}/>
        }

        return (
          <div>
            <HeaderHome/>
            
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <div className={classes.storymargin}>
                <h2 className={classes.title}>Upload Cover Story</h2>
                <Card className={classes.uploadcontainer}>
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
                        {errorMsg ? <p className={classes.errorMsg}>{errorMsg}</p> : ''}
                    </CardContent>
                    <CardActions>
                        <Button size="small" clor="primary" className={classes.buttonnextup}
                        onClick={this.submitCover }
                        >
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

export default withStyles(createStoryStyle)(UploadCover);
