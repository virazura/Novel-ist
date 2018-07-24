import { container, title } from "assets/jss/material-kit-react.jsx";

const discoverStyle = {
    container,
    title: {
        ...title,
        textAlign: "center",
        paddingTop: "50px",
        paddingBottom: "30px",
        minHeight: "32px",
        textDecoration: "none",
        color: "#000"
    },
    main: {
        background: "rgba(137, 188, 178, 0.6)",
        position: "relative",
        zIndex: "3",
        color: "#FFFFFF"
      },
    mainRaised: {
    margin: "60px 0px 60px 0px",
    borderRadius: "2px",
    boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    innerClass:{
        display: "inline-flex",
        margin: "100px 0px 50px 450px"
      },
      itemClass:{
        padding: "5px 15px",
        background: "#ffffff",
        color: "#ffff",
        listStyle: "none",
        border: "1px solid #659e93",
        borderRadius: "5px",
        "&:hover,&:focus": {
          background: "#3d8275",
          color: "#ffffff"
        }  
      },
      linkClass:{
        color: "#659e93",
        "&:hover,&:focus": {
          color: "#ffffff"
        }
      },
      activeClass:{
        background: "#659e93",
      },
      activeLinkClass:{
          color: "#ffffff"
      }
}

export default discoverStyle;