import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import aboutStyle from "assets/jss/material-kit-react/views/componentsSections/aboutStyle.jsx";

const SectionAbout = (props) => {
    const { classes } = props;
    return(
        <div className={classes.aboutcontainer} id="about">
            <h2 className={classes.title}>About</h2> 
            <p className={classes.info}>Novel merupakan salah satu jenis karya fiksi yang mudah ditulis bagi semua orang. Tidak ada batasan profesi untuk bisa menulis novel, yang membedakan hanyalah tingkat pengalaman seorang pemula dengan profesional. <strong>Nove-ist</strong> merupakan aplikasi website dimana pengguna dapat mempublikasikan karya fiksi mereka dan melatih kemampuan menulis, tidak hanya itu pengguna juga bisa membaca karya tulis dari pengguna lain. Jika bingung dalam pemilihan nama karakter, <strong>Nove-ist</strong> menyediakan section untuk konten inspirasi dimana pengguna dapat melihat nama-nama dari beberapa negara, tidak hanya itu telah disediakan kutipan-kutipan dari beberapa tokoh yang bisa kamu lihat serta section pencarian gambar.</p>
        </div>
    );
}

export default withStyles(aboutStyle)(SectionAbout);