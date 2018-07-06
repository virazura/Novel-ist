import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import aboutStyle from "assets/jss/material-kit-react/views/componentsSections/aboutStyle.jsx";

const SectionAbout = (props) => {
    const { classes } = props;
    return(
        <div className={classes.aboutcontainer} id="about">
            <h2 className={classes.title}>About</h2> 
            <p className={classes.info}>Novel merupakan salah satu jenis karya fiksi yang mudah ditulis bagi semua orang. Tidak ada batasan profesi untuk bisa menulis novel, yang membedakan hanyalah tingkat pengalaman seorang pemula dengan profesional. <strong>Novel-ist</strong> merupakan aplikasi website dimana pengguna dapat mempublikasikan karya fiksi mereka dan melatih kemampuan menulis, tidak hanya itu pengguna juga bisa membaca karya tulis dari pengguna lain kemudian menilai bagus tidaknya karya tersebut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut rerum quas porro placeat at adipisci reprehenderit! Porro numquam iste reprehenderit eligendi molestias quia. Assumenda debitis perferendis amet suscipit quidem, provident consectetur deserunt ipsa voluptates cum harum doloribus beatae nihil saepe officiis fugiat, sapiente aut aliquid nulla, delectus minima accusantium ab.</p>
        </div>
    );
}

export default withStyles(aboutStyle)(SectionAbout);