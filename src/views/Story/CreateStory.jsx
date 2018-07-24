import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
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
import HeaderNavLinks from "components/Header/HeaderNavLinks.jsx";

//icon
import Checkbox from "@material-ui/core/Checkbox";


import createStoryStyle from "assets/jss/material-kit-react/components/createStoryStyle.jsx";

class CreateStory extends React.Component {
    constructor(props){
      super(props);
      this.state={
        category: "",
        mature: false
      }
    }

    //handle category change
    handleChangeCategory = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    //handle check mature content
    handleMatureContent = mature => event => {
        this.setState({
            [mature]: event.target.checked
        });
        console.log(this.state.mature)
    }
    

    render() {
        const { classes, ...rest } = this.props;
        const {category} = this.state;
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
                <h2 className={classes.title}>Make A New Story</h2>
                <Card className={classes.storycontainer}>
                    <CardContent>
                        <TextField 
                            fullWidth
                            label="Title"
                            id="title"
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
                                value={category}
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
                                        checked={this.state.mature}
                                        onChange={this.handleMatureContent("mature")}
                                        value="mature"
                                    />
                                }
                                label="Mature Content"
                            />
                        </FormControl>

                    </CardContent>
                    <CardActions>
                        <Button size="small" clor="primary" className={classes.buttonnext}>
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
