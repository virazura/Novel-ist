import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {Redirect} from 'react-router-dom';
// core components
import Footer from "components/Footer/Footer.jsx";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import HeaderHome from "components/Header/HeaderHome.jsx"

import editProfileStyle from "assets/jss/material-kit-react/views/editProfileStyle.jsx";


class EditProfilePage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id: this.props.location.state.id,
            gender: "",
            name: '',
            about: '', 
            saved: false
        }
    }

    //handle change gender selection
    handleChangeGender = e => {
        this.setState({ gender : e.target.value})
    }

    //handle name change
    handleNameChange = e => {
        this.setState({ name: e.target.value})
    }

    //handle about
    handleAboutChange = e => {
        this.setState({ about: e.target.value})
    }

    //handle about
    handleBirthdayChange = e => {
        this.setState({ birthday: e.target.value})
    }

    //handle edit profile page
    sendEditProfile = () => {
        fetch('http://localhost:3001/edit-profile', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                about: this.state.about,
                birthday: this.state.birthday,
                gender: this.state.gender        
            })
        })
        .then( response => response.json())
        .then( data => {
            this.setState({
                name: data.name,
                about: data.about,
                birthday: data.birthday,
                gender: data.gender,
                saved: true
            })
        })
    }

    render() {
        const { classes, ...rest } = this.props;
        const {gender,  saved, id} = this.state;
        console.log(saved)
        if(saved === true){
            return <Redirect to={{
                pathname: '/profile-page',
                state: {id: id}
            }}/>
        }
        return (
          <div>
            <HeaderHome/>
            
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                
                <div className={classes.storymargin}>
                <h2 className={classes.title}>Edit Profile</h2>
                    <div className={classes.tablescontainer}>
                    <Card className={classes.editcontainer}>
                    <CardContent className={classes.editcontent}>
                        <input 
                            accept="image/*"
                            className={classes.input}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button component="span" className={classes.buttonupload}>
                            Choose Photo
                            </Button>
                        </label>
                        <TextField 
                            fullWidth
                            label="Name"
                            id="name"
                            onChange={this.handleNameChange}
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
                        <TextField 
                            fullWidth
                            label="About"
                            id="about"
                            onChange={this.handleAboutChange}
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
                        <form className={classes.datepicker} noValidate>
                            <TextField
                                onChange={this.handleBirthdayChange}
                                id="date"
                                label="Birthday"
                                type="date"
                                defaultValue="2018-05-24"
                                className={classes.datepick}
                                InputLabelProps={{
                                    shrink:true,
                                }}
                            />
                        </form>
                        <FormControl component="fieldset" required className={classes.genderselection}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="Gender"
                                name="gender"
                                className={classes.genderradio}
                                value={gender}
                                onChange={this.handleChangeGender}
                            >
                                <FormControlLabel value="female" control={<Radio color="primary"/>} label="Female"/>
                                <FormControlLabel value="male" control={<Radio color="primary"/>} label="Male"/>
                            </RadioGroup>
                        </FormControl>
                    </CardContent>
                    <CardActions>
                        <Button size="small" clor="primary" className={classes.buttonsave}
                        onClick={this.sendEditProfile}>
                            Save
                        </Button>
                    </CardActions>
                </Card>
                    </div>
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

export default withStyles(editProfileStyle)(EditProfilePage);
