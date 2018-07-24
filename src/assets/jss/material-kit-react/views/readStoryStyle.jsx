
const StoryStyle = {
  paper:{
    padding: "80px",
    textAlign: "justify",
    overflow: "auto",
    maxHeight: 580,
    maxWidth: 900,
    marginLeft: "20px"
  },
  list:{
    width: "100%",
    maxWidth: 250,
    position: "relative",
    overflow: "auto",
    maxHeight: "100vh",
    marginTop: "70px",
    backgroundColor: "#c7dfd8"
  },
  listchapter:{
    "&:hover,&:focus": {
      backgroundColor: "#96c1b8",
    }
  },
  selected:{
    backgroundColor: "#96c1b8 !important" 
  },
  chaptercontent:{
    marginTop: "100px",
  },
  subheader:{
    fontSize: "15px",
    lineHeight: 2
  },
  subheadercontainer:{
    marginBottom: "15px"
  }

  
  
  
};


export default StoryStyle;
