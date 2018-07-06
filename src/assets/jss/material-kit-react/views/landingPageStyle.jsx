import { container } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",
    fontWeight: "900"
  },
  title: {
    fontSize: "2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    color: "#000"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "5px 5px 200px 280px",
    color: "#000",
    lineHeight: "1rem",
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "500"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default landingPageStyle;
