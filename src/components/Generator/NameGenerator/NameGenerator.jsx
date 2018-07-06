import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// Core Components
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContent from "./TabContent.jsx";
import Typography from "@material-ui/core/Typography";




// Style
import generatorStyle from "assets/jss/material-kit-react/components/generatorStyle.jsx";

class NameGenerator extends React.Component{

    constructor(props){
        super(props);
        this.state={
            value: 0
            

        }

    }

    // handle change index
    handleChange = (e, value) => {
        this.setState({
            value
        })
    }

    // get section 
    getRegion = (e, region) => {
        this.setState({
            region
        })
        this.props.onSelectRegion(region)
    }
    
    
    render(){
        const { pickNameGenerator, classes, name, surname } = this.props;
        const {value }= this.state
        return(
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        fullWidth
                    >
                        {pickNameGenerator.region.map( (region, i) => {

                            return (
                                <Tab key={region} value={i} label={region} onClick={((e) => this.getRegion(e, region))} />
                            )
                            
                        })}
                        
                
                    </Tabs>
                    
                </AppBar>
                <div className={classes.tab}>
                    <div className={classes.name}>
                        { value === 0 && <TabContent>{name} {surname}</TabContent>}
                        { value === 1 && <TabContent>{name} {surname}</TabContent>}
                        { value === 2 && <TabContent>{name} {surname}</TabContent>}
                        { value === 3 && <TabContent>{name} {surname}</TabContent>}
                        { value === 4 && <TabContent>{name} {surname}</TabContent>}
                    </div>
                    
                    <Typography  align="center" variant="headline" className={classes.press}>Select The Gender And Region First Then Press SpaceBar</Typography>
                </div>
                
            </div>
        );
    }
}





NameGenerator.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(generatorStyle)(NameGenerator);