import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// Core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore"
import ExpandLess from "@material-ui/icons/ExpandLess"

// Style
import pickerStyle from "assets/jss/material-kit-react/components/pickerStyle.jsx";
import { ListSubheader } from "@material-ui/core";



class Picker extends React.Component{

        state = {
            open: false, 
            selectedgender: "",
            selectedselection: ""
        }

        nestedHandleClick = () => {
            this.setState({
                open: !this.state.open
            })
        }

        // get gender 
        getGender = (e, gender) => {
            this.setState({
                selectedgender: gender
            })
            this.props.onSelectGender(gender);
        }

        // get selection
        getSelection = (e, selection) => {
            this.setState({
                selectedselection: selection
            })
            this.props.Selection(selection);
        }

        render(){

        const {classes, pickGenerator, pickNameGenerator} = this.props;
        
        
        return(
            <div className={classes.pickerContainer}>
                <List 
                    component="nav"
                    subheader={<ListSubheader component="div"> Pick Generator </ListSubheader>} 
                >
                    {pickGenerator.map( (selection, i) => {
                        return (selection === "Name Generator") 
                        ? 
                        <div key="expand">
                        <ListItem button key={i} onClick={this.nestedHandleClick} className={classes.pickerlist}>
                            <ListItemText primary={selection} onClick={((e) => this.getSelection(e, selection))} />
                            {this.state.open ? <ExpandLess /> : <ExpandMore/>}
                        </ListItem>
                        <Collapse in={this.state.open} timeout="auto" >
                            <List component="div">
                            {pickNameGenerator.gender.map( (gender, index) => {
                                return (    
                                    <ListItem button key={index} className={classes.pickerlist}>
                                        <ListItemText primary={gender}  onClick={((e) => this.getGender(e, gender))}/>
                                    </ListItem>
                                )
                            })
                            }               
                                
                            </List>
                        </Collapse>
                        </div>
                        :
                        <ListItem button className={classes.pickerlist} key={i} onClick={((e) => this.getSelection(e, selection))}>
                            <ListItemText primary={selection} />
                        </ListItem>
                        }
                    )}

                    
                </List>
            </div>
        );
        }
        
}
    


Picker.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(pickerStyle)(Picker);