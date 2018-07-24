import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
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
import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";

import editProfileStyle from "assets/jss/material-kit-react/views/editProfileStyle.jsx";


class EditProfilePage extends React.Component {
    state={
        gender: "female"
    }

    //handle change gender selection
    handleChangeGender = e => {
        this.setState({ gender : e.target.value})
    }
    render() {
        const { classes, ...rest } = this.props;
        const {gender} = this.state;
        console.log(gender)
        return (
          <div>
            <Header
                color="montecarlo"
                brand="Novelist"
                rightLinks={<HeaderNavLinks navLink1="Story" navLink2="Create Story" />}
                fixed
                {...rest}
            />
            
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
                        <Button size="small" clor="primary" className={classes.buttonsave}>
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
