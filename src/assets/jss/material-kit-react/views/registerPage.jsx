import { container } from "assets/jss/material-kit-react.jsx";

const registerPageStyle = {
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "20vh",
    color: "#FFFFFF"
  },
  cardHidden: {
    opacity: "0",
    transform: "translate3d(0, -60px, 0)"
  },
  particles:{
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",  
  },
  pageHeader: {
    background: "linear-gradient(to right, #3d8275, #466086)",
    minHeight: "100vh",
    maxHeight: "1200px",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    }
  },
  form: {
    margin: "0",
    height: "400px"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    marginLeft: "20px",
    marginRight: "20px",
    marginTop: "-40px",
    padding: "20px 0",
    marginBottom: "15px",
    backgroundColor: "#bbdbd5"
  },
  socialIcons: {
    maxWidth: "24px",
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px"
  },
  divider: {
    marginTop: "30px",
    marginBottom: "0px",
    textAlign: "center"
  },
  cardFooter: {
    paddingTop: "0rem",
    border: "0",
    borderRadius: "6px",
    justifyContent: "center !important",
    display: "block"
  },
  inputIconsColor: {
    color: "#495057"
  },
  buttonsingin:{
    background: "#bbdbd5",
    color: "#000",
    "&:hover,&:focus":{
      color: "000",
      backgroundColor: "#5a9a8e"
    }
  },
  buttonplace:{
    marginLeft: "100px",
    marginTop: "30px"
  },
  signinform:{
    marginTop: "20px"
  },
  register:{
    cursor: "pointer"
  },
  passwordlabel:{
    marginTop: "100px"
  },
  emaillabel:{
      marginTop: "50px"
  }
};

export default registerPageStyle;
