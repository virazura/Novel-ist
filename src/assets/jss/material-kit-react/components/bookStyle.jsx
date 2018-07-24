const bookStyle = {
    card: {
        width: "180px",
        height: "300px",
        boxShadow: "2px 2px 8px 0px rgba(0, 0, 0, 0.2)"
    },
    avatar:{
        backgroundColor: "#91BAEF",
        height: "15px",
        width: "15px"
    },
    media :{
        paddingTop: "56.25%",
        height: "200px"
    },
    booklist: {
        display: "inline-block",
        borderRadius: "5rem",
        padding: "0.5rem",
        margin: "0.5rem",
        transform: "translateZ(0)",
        transition: "transform 0.25s ease-out"
    },
    cardac: {
        marginLeft: "16px"
    },
    icon: {
        fontSize: "15px",
        color: "#000000",
    },
    iconText: {
        fontSize: "13px",
        color: "#000000"
    },
    iconMuted: {
        fontSize: "13px",
        color: "#555"
    },
    mutedText: {
        fontSize: "20px"
    },
    imgDialog: {
        width: "150px",
        height: "200px",
        marginLeft: "75px"
    },
    titleBook: {
        textAlign: "center",
        fontSize: "10px"
    },
    dialogAuthor: {
        display: "flex", 
        justifyContent: "center",
        marginBottom:"10px"   
    },
    typoAuthor: {
        marginLeft: "5px"
    },
    copyrights: {
        display: "flex",
        marginTop: "13px"   
    },
    dialogButton: {
        display: "flex",
        justifyContent: "center"
    },
    readbutton:{
        backgroundColor:"#96c1b8",
        color: "#ffffff",
        "&:hover,&:focus": {
        backgroundColor: "#659e93",
        color: "#ffffff"
        },
        padding: "0px 30px"  
    },
    addbutton:{
        backgroundColor:"#96c1b8",
        color: "#ffffff",
        "&:hover,&:focus": {
        backgroundColor: "#659e93",
        color: "#ffffff"
        },  
        padding: "1px"
    }
    
}
export default bookStyle;

