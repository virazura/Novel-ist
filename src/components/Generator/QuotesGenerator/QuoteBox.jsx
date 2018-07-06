import React from 'react';

import Typography from "@material-ui/core/Typography";

class QuoteBox extends React.Component{
    render(){
        return(
            <div className="quoteBox">
                <Typography variant="title" align="center" id="quoteText">
                    <p>
                        Every child is an artist. The challenge is to remain an artist after you grow up.
                    </p>
                </Typography>
                <Typography variant="subheading" align="center" gutterBottom id="author">
                    - Pablo Picaso
                </Typography>
            </div>
        )
    }
}

export default QuoteBox;