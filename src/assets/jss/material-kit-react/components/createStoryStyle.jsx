import { container, title } from "assets/jss/material-kit-react.jsx";



const createStoryStyle = {
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
  storycontainer:{
      maxWidth: 500,
      height: 480,
      marginLeft: "300px"
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
  buttonnext:{
      top: "120px",
      left: "400px",
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
    top: "230px",
    left: "110px",
    background:"#9dadc4",
    color: "#ffffff",
    "&:hover,&:focus": {
      background: "#6e83a3",
      color: "#ffffff"
    }  
    },
  buttonnextup:{
    top: "250px",
    left: "290px",
    background:"#89bcb2",
    color: "#ffffff",
    "&:hover,&:focus": {
      background: "#3d8275",
      color: "#ffffff"
    } 
  },
  chaptercontainer:{
    width: "850px",
    height: "650px",
    marginLeft: "120px"
  },
  homewrapper:{
    marginTop: "20px",
    marginLeft: "15px",
    width: "775px",
    display: "block",
    height: "400px"
  },
  homeeditor:{
    border: "1px solid #f1f1f1",
    padding: "5px",
    borderRadius: "2px",
    height: "80%",
    color: "#000000"
  },
  toolbar:{
    color: "#000000"
  },
  buttonnextchap:{
    top: "10px",
    left: "340px",
    background:"#89bcb2",
    color: "#ffffff",
    "&:hover,&:focus": {
      background: "#3d8275",
      color: "#ffffff"
    }  
  },
  displaybutton:{
    diplay: "inline-block"
  },
  buttonadd:{
    background:"#89bcb2",
      color: "#ffffff",
      "&:hover,&:focus": {
        background: "#3d8275",
        color: "#ffffff"
      },
    marginBottom: "30px"  
  }
  
};


export default createStoryStyle;
