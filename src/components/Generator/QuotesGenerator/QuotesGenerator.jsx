import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// Core Components
import QuoteBox from "./QuoteBox.jsx";
import ButtonQuoteGen from "./ButtonQuoteGen.jsx";




// Style
import generatorStyle from "assets/jss/material-kit-react/components/generatorStyle.jsx";

class QuotesGenerator extends React.Component{

    constructor(props){
        super();
        this.state={
            quotesApi: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
            quote:"",
            title: ""
            
        }
        this.onClick = this.onClick.bind(this);

    }
    
    componentDidMount(){
        const now = Date.now();
        fetch(`${this.state.quotesApi}${now}`)
            .then(response => {
                return response.json();
            })
            .then(quote => {
                this.setState({
                    quote: quote[0].content,
                    title: quote[0].title
                });
            })
            
    }

    // get Quotes
    getQuote = () => {
        const now = Date.now();
        fetch(`${this.state.quotesApi}${now}`)
            .then(response => {
                return response.json(); 
            })
            .then(quote => {

                this.setState({
                    quote: quote[0].content,
                    title: quote[0].title
                });
            })
            .then(this.display());
            // .catch(err => console.log(err));
            
    }   

    display = () => {
        const quote = this.state.quote;
        const author = this.state.title;
        

        document.getElementById("quoteText").innerHTML = quote;
        document.getElementById("author").innerHTML = `- ${author}`;
    }


    //Call
    onClick(){
        this.getQuote();
        
    }

    render(){
        const { classes } = this.props;
        return(
            
            <div className={classes.quoteBox}>
                <div className={classes.quotetext}>
                    <QuoteBox />
                </div>
                <div className={classes.buttonquote}>
                    <ButtonQuoteGen onClick={this.onClick}/>
                </div>
            </div>
        );  
    }
}


QuotesGenerator.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(generatorStyle)(QuotesGenerator);