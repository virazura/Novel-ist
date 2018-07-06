import { container, title } from "assets/jss/material-kit-react.jsx";

const inspirationStyle = {
    container,
    inspirationContainer: {
        width: "100%",
        height: "800px"
    },
    title: {
        ...title,
        textAlign: "center",
        paddingTop: "50px",
        paddingBottom: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    picker:{
        margin: "4rem",
        display: "grid"
    },
    infoText: {
        margin: " 2rem 4rem 4rem 4rem",
        textAlign: "justify"
    },
    generatorContainer: {
        backgroundColor: "#bbdbd5",
        borderRadius: "10px"
    }
}

export default inspirationStyle;

