import { defaultFont } from "assets/jss/material-kit-react.jsx";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.jsx";

const headerNavLinksStyle = theme => ({
    list: {
        ...defaultFont,
        fontSize: "14px",
        margin: 0,
        paddingLeft: "0",
        listStyle: "none",
        paddingTop: "0",
        paddingBottom: "0",
        color: "inherit"
      },
      listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          "&:after": {
            width: "calc(100% - 30px)",
            content: '""',
            display: "block",
            height: "1px",
            marginLeft: "15px",
            backgroundColor: "#e5e5e5"
          }
        }
      },
      listItemText: {
        padding: "0 !important"
      },
      navLink: {
        background: "inherit",
        color: "#fff",
        position: "relative",
        padding: "0.9375rem",
        fontWeight: "600",
        fontSize: "12px",
        textTransform: "uppercase",
        borderRadius: "3px",
        lineHeight: "20px",
        letterSpacing: "2px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus,&:active": {
            backgroundColor: "#659e93",
            color: "#ffffff"
        },
        [theme.breakpoints.down("sm")]: {
          width: "calc(100% - 30px)",
          marginLeft: "15px",
          marginBottom: "8px",
          marginTop: "8px",
          textAlign: "left",
          "& > span:first-child": {
            justifyContent: "flex-start"
          }
        }
      },
      notificationNavLink: {
        color: "inherit",
        padding: "0.9375rem",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        top: "4px"
      },
      registerNavLink: {
        top: "3px",
        position: "relative",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex"
      },
      navLinkActive: {
        color: "inherit",
        backgroundColor: "rgba(255, 255, 255, 0.1)"
      },
      icons: {
        width: "20px",
        height: "20px",
        marginRight: "3px"
      },
      socialIcons: {
        position: "relative",
        fontSize: "20px !important",
        marginRight: "4px"
      },
      dropdownLink: {
        background:"#89bcb2",
        textDecoration: "none",
        display: "block",
        color: "#fff",
        padding: "10px 20px",
        "&:hover,&:focus": {
          background: "#659e93",
          color: "#fff",
          
        }
      },
      ...tooltip,
      marginRight5: {
        marginRight: "5px"
      },
      dropdown:{
        background:"#89bcb2",
        margin: "0px",
        padding: "0px",
      }
      
    });

export default headerNavLinksStyle;
