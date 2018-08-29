import { container, title } from "assets/jss/material-kit-react.jsx";

const aboutStyle = {
    container,
    title: {
        ...title,
        textAlign: "center",
        paddingTop: "50px",
        paddingBottom: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    info: {
        margin: "0 100px",
        textAlign: "justify" 
    },
    aboutcontainer: {
        width: "100%",
        height: "300px",
        background: "rgba(137, 188, 178, 0.6)"
    }
}

export default aboutStyle;