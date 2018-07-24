import { container, title } from "assets/jss/material-kit-react.jsx";

const editProfileStyle = {
  container:{
      zIndex: "12",
      color: "#FFFFFF",
    //   height: "500px",
      ...container
  },
  title: {
    ...title,
    paddingTop: "100px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    marginBottom: "5rem"
  },
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
    fontWeight: "900"
  },
  main: {
    top: "50px",
    zIndex: "3",
    background: "#FFFFFF",
    position: "relative",
    marginBottom:"80px"
  },
  mainRaised:{
      margin: "-60px 30px 0px",
      borderRadius: "6px",
      boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0  8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  footer:{
    marginTop: "0px"
  },
  editcontainer:{
      maxWidth: 550,
      height: 750,
      marginLeft: "280px"
  },
  titleinput:{
    border: "2px solid #3d8275",
    borderRadius: "3px"
  },
  titleformlabel:{
      fontSize: "20px"
  },
  formcontrol:{
      minWidth: 120
  },
  descriptioninput:{
    height: "150px",
    border: "2px solid #3d8275",
    borderRadius: "3px"
  },
  storymargin:{
    paddingBottom: "50px"
  },
  checkbox:{
      top: "140px"
  },
  buttonsave:{
      top: "20px",
      left: "240px",
      background:"#89bcb2",
      color: "#ffffff",
      "&:hover,&:focus": {
        background: "#3d8275",
        color: "#ffffff"
      }  
  },
  input:{
    display: "none",
  },
  uploadcontainer:{
    maxWidth: 400,
    height: 380,
    marginLeft: "350px"
  },
  buttonupload:{
    top: "10px",
    left: "180px",
    background:"#9dadc4",
    color: "#ffffff",
    "&:hover,&:focus": {
      background: "#6e83a3",
      color: "#ffffff"
    }  
  },
  datepicker:{
    display: "flex",
    flexWrap: "wrap",
    marginTop: "150px"
  },
  genderselection:{
    marginTop: "30px"
  },
  genderradio:{
    flexDirection: "row"
  },
  editcontent:{
      marginTop: "150px"
  }
  
  
};


export default editProfileStyle;
