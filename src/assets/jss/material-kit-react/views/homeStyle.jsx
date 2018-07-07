import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  container:{
      zIndex: "12",
      color: "#FFFFFF",
      ...container
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "70px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center"
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
    fontWeight: "900"
  },
  main: {
    top: "70px",
    zIndex: "3",
    background: "#FFFFFF",
    position: "relative",
  },
  mainRaised:{
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0  8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  footer:{
    marginTop: "0px"
  }, 
  searchBook:{

    top: "100px",
    marginLeft: "70%"
  },
  root:{
    backgroundColor:"#89bcb2",
    width: "500px"
  },
  iconbottom:{
    color: "#fff"
  },
  pickCategory:{
    marginTop: "50px"
  },
  innerClass:{
    display: "inline-flex",
    margin: "100px 0px 50px 350px"
  },
  itemClass:{
    padding: "5px 15px",
    background: "#659e93",
    listStyle: "none",
    border: "1px solid #ffffff",
    borderRadius: "5px",
    "&:hover,&:focus": {
      background: "#3d8275",
    }  
  },
  linkClass:{
    color: "#ffffff",
    "&:hover,&:focus": {
      color: "#ffffff"
    }
  },
  activeClass:{
    background: "#3d8275",
    color: "#ffff"
  }
  
};

export default landingPageStyle;
