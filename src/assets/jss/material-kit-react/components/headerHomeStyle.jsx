import { defaultFont } from "assets/jss/material-kit-react.jsx";

const headerHomeStyle = theme =>  ({
    root:{
        flexGrow: 1
    },
    brand: {
        flexGrow: 1
    },
    appbar: {
        background:"#89bcb2",
    },
    menuButton:{
        marginLeft: -12,
        marginRight: 20
    },
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
      hoverNavigatin:{
        "&:hover,&:focus": {
          background: "#659e93",
          color: "#fff",
        }
      }
})

export default headerHomeStyle;