import React from 'react';

import Button from "components/CustomButtons/Button.jsx";

// Style




class ButtonQuoteGen extends React.Component{
    render(){

        return(
            <div>
                <Button color="montecarlo" round onClick={this.props.onClick}>Random Quote</Button>
    
            </div>
        )
    }
}

export default ButtonQuoteGen;