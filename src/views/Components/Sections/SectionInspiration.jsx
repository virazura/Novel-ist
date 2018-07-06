import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Picker from "components/Picker/Picker.jsx";
import NameGenerator from "components/Generator/NameGenerator/NameGenerator.jsx";
import QuotesGenerator from "components/Generator/QuotesGenerator/QuotesGenerator.jsx";
import FindPicture from "components/Generator/FindPicture/FindPicture.jsx";
import Grid from "@material-ui/core/Grid";
import {pickGenerator, pickNameGenerator} from "storedata/generatorData.js";

//styles
import inspirationStyle from "assets/jss/material-kit-react/views/componentsSections/inspirationStyle";

class SectionInspiration extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            name: "",
            surname: "",
            region: "",
            gender: "",
            apiUrl: "https://uinames.com/api",
            selection: ""
            
        }

        this.onClick = this.onClick.bind(this)
    }
    
    // get gender data from picker
    getGenderData = (gender) => {
        this.setState({
            gender : gender.toString().toLowerCase()
        })
    }

    //get region data from namegenerator
    getRegionData = (region) => {
        this.setState({
            region
        })
    }

    //get selection data from picker
    getSelectionData = (selection) => {
        this.setState({
            selection
        })
    }

    // Press Spacebar
    onClick(e){
        if(e.keyCode === 32){
            fetch(`${this.state.apiUrl}/?gender=${this.state.gender}&region=${this.state.region}`)
            .then( res => res.json())
            .then(namedata => {
                this.setState({
                    name: namedata.name,
                    surname: namedata.surname
                })
            })
        }
    }
    
    // first name to render
    componentDidMount(){
        fetch(`${this.state.apiUrl}/?region=france`)
            .then( res => res.json())
            .then(namedata => {
                this.setState({
                    name: namedata.name,
                    surname: namedata.surname
                })
            })
            .catch(err => 
                console.log(err)
            )

        window.addEventListener('keyup', this.onClick, false);
        
    }

    renderSelection(){
        switch(this.state.selection){
            case 'Name Generator' :
                return <NameGenerator pickNameGenerator={pickNameGenerator}
                onSelectRegion={this.getRegionData}
                name={this.state.name}
                surname={this.state.surname}
                />
            case 'Quotes Generator' :
                return <QuotesGenerator />
            case 'Find Picture' :
            return <FindPicture />
            default:
                return ""
        }
    }

    render(){
        const { classes } = this.props;
        
        return(
            <div className={classes.inspirationContainer} id="inspiration">
                <h2 className={classes.title}>Inspiration</h2> 
                <p className={classes.infoText}>Pada bagian inspiration ini, user dapat memilih beberapa konten inspirasi seperti Name Generator dimana user bisa mendapatkan nama-nama dari beberapa negara dengan memilih gender (jenis kelamain) setelah itu memilih negara, kemudian Quotes Generator dimana user bisa mendapatkan quotes-quotes atau kutipan-kutipan dari beberapa tokoh diseluruh dunia, dan yang terakhir user dapat mencari gambar-gambar sebagai inspirasi.</p>
                <div className={classes.picker}>
                    <Grid container spacing={24}>
                        <Grid item xs={3}>
                            <Picker 
                            pickGenerator={pickGenerator}
                            pickNameGenerator={pickNameGenerator}
                            onSelectGender={this.getGenderData}
                            Selection={this.getSelectionData}
                            />
                        </Grid>
                        <Grid item xs={9}> 
                            <div className={classes.generatorContainer}>
                                {this.renderSelection()} 
                            </div>
                        </Grid>
                    </Grid>
                    
                </div>
            </div>
        );
    }
}

export default withStyles(inspirationStyle)(SectionInspiration);