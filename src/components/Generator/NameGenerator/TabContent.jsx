import React from 'react';
import Typography from "@material-ui/core/Typography";



//style
import "./tabcontentStyle.css"

const TabContent = ({children}) => {
        return (

                <Typography component="div" className="name" variant="display2" align="center">
                   {children}
                </Typography>  
        );
    }
    

export default TabContent;