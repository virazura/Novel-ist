/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { List, ListItem, withStyles, Icon } from "@material-ui/core";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import CloseIcon from "@material-ui/icons/Close";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

//transition function
function Transition(props){
  return <Slide direction="up" {...props}/>
}

class Footer extends React.Component {
  state={
    open: false,
    copyrightopen: false
  }

  //handle open
  handleClickOpen = () => {
    this.setState({ open : true})
  }

  //handle open copyright
  handleCopyrightOpen = () => {
    this.setState({ copyrightopen : true})
  }

  //handle close copyright
  handleCloseCopyright = () => {
    this.setState({ copyrightopen : false})
  }

  //handle close
  handleClose = () => {
    this.setState({ open : false})
  }

  render(){
    const { classes, whiteFont } = this.props;
    const footerClasses = classNames({
      [classes.footer]: true,
      [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
      [classes.a]: true,
      [classes.footerWhiteFont]: whiteFont
    });
    return (
      <footer className={footerClasses}>
        <div className={classes.container}>
          <div className={classes.left}>
            <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                <Button onClick={this.handleCopyrightOpen}>Copyright</Button>
                <Dialog
                  open={this.state.copyrightopen}
                  onClose={this.handleCloseCopyright}
                  aria-labelledby="copyright"
                  aria-describedby="palanggaran-copyright"
                >
                  <DialogTitle id="copyright">{"Pedoman Kontent Cerita"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="pelanggaran-copyright" className={classes.copyrighttext}>
                      Pelanggaran copyright adalah pelanggaran yang menyangkut tentang hak milik seseorang. Jika pengguna Novel-list mempublikasikan karya milik orang lain, maka pihak Novel-list tidak bertanggung jawab. Hal-hal yang termasuk dalam pelanggaran antara lain adaptasi atau sedikit perubahan pada karya seperti merubah nama, kesamaan kejadian, dan merubah sudut pandang.
                      <br/>
                      <br/>
                      Copyright hanya melindungi fisik dari sebuah ide, bukan ide itu sendiri. Tetapi, kesamaan akan ide, tema ide, dan judul tidak termasuk dalam pelanggaran copyright kecuali terdapat bukti kuat. Jika hal tersebut terjadi maka pihak Novel-list menyarankan untuk segera menghubungi penulis terkait dan menyelesaikannya secara kekeluargaan.
                    </DialogContentText>
                  </DialogContent>
                </Dialog>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
              <Button onClick={this.handleClickOpen}>Content Guidelines</Button>
                <Dialog
                  fullScreen
                  open={this.state.open}
                  onClose={this.handleClose}
                  TransitionComponent={Transition}
                >
                  <AppBar className={classes.appbar}>
                    <Toolbar>
                      <IconButton onClick={this.handleClose} aria-label="close">
                        <CloseIcon/>
                      </IconButton>
                      <Typography variant="title" className={classes.titlecontent}>
                        Content Guidelines
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <DialogContent className={classes.contentguidelines}>
                    
                      <Typography variant="title" className={classes.contenttext}>Pelanggaran Copyright</Typography>
                      <br/>
                      Tujuan dari website Novel-list ini adalah untuk membuat cerita yang dapat ditemui oleh semua orang, untuk itu pengguna perlu menyadari adanya tipe konten dari cerita yang tersedia untuk dibaca serta tipe konten cerita yang dapat dibuat dan tidak boleh dibuat.
                      Untuk itu sebelum membuat cerita di Novel-list, ada bainknya memerhatikan hal berikut:
                      <ul>
                        <li>Cerita yang akan dibuat harus sesuai dengan Rating seperti yang dituliskan dibawah beserta Konten yang Dilarang</li>
                        <li>Cerita yang dibuat sepenuhnya milik pribadi atau telah memiliki persetujuan dari penulis yang bersangkutan, dapat dilihat di Copyright</li>
                        <li>Cerita telah sesuai dikategorikan</li>
                      </ul>
                      <br/>
                      <Typography variant="title" className={classes.contenttext}>Rating Cerita</Typography>
                      <br/>
                      Semua pengguna yang ingin membuat cerita diharapkan memberikan penilian sendiri terhadap konten cerita, seperti apakah cerita tersebut terdapat konten untuk orang dewasa (mature content).
                      <br/>
                      <br/>
                      <Typography variant="title" className={classes.contenttext}>Mature Content</Typography>
                      <br/>
                      Mature Content merupakan cerita untuk 18 tahun ke atas (dewasa). Terdapat pembatasan dalam menemukan mature content di Novel-list. Berikut beberapa konten yang dapat dikategorikan dewasa:
                      <ul>
                        <li>Terdapat sex-scene (R-rated)</li>
                        <li>Adanya tema atau konten yang menyakiti dirinya sendiri (self-harm)</li>
                        <li>Adanya konten grafik yang menggambarkan kekerasan</li>
                      </ul>
                      <br/>
                      <Typography variant="title" className={classes.contenttext}>Konten yang Dilarang (Prohibited Content)</Typography>
                      <br/>
                      Berikut beberapa cerita yang dilarang, pihak Novel-list berhak menghapus konten yang dianggap melanggar aturan:
                      <ul>
                        <li>Cerita pornography</li>
                        <li>Cerita yang mengandung pesan non-consensual sex</li>
                        <li>Cerita yang bersifat mempromosikan hal-hal yang anarkis</li>
                      </ul>
                      <br/>
                      <Typography variant="title" className={classes.contenttext}>Kategori Konten</Typography>
                      <br/>
                      <Typography variant="subheading" className={classes.contenttext}>Fan Fiction</Typography>
                      Fan Fiction merupakan jenis cerita yang mengandung karakter, tempat, atau plot berdasarkan dari narratives nyata untuk diceritakan kembali sebagai sesuai yang baru dan original. Narratives nyata dapat berarti sesuatu seperti buku yang sedang popular, tv shows, film, games, komik, dan lain sebagainya. Beberapa fan fiction terkadang mengambil dari karakter nyata seperti artist (entertainer), contoh dari fan fiction adalah seperti Katniss yang dikirim ke permainan Hunger Games berubah cerita menjadi Katnis betarung dengan Naruto.
                      <br/>
                      <Typography variant="subheading" className={classes.contenttext}>Fantasy</Typography>
                      Fantasy merupakan salah satu fiksi yang berlatar belakang di dunia yang berbeda (alternative) atau berasal dari imajinasi dimana terdapat karakter supernatural dan magical. Biasanya menyangkut konten legendary, mitologi, cerita rakyat dimana di dalamnya terdapat naga, peri, penyihir, dan juga kesatria. Contoh dari cerita fantasy adalah Harry Potter karya J.K Rowling.
                      <br/>
                      <Typography variant="subheading" className={classes.contenttext}>Random</Typography>
                      Tidak semua cerita dapat dikategorikan, Random kategori merupakan campuran dari semua konten atau jika penulis belum bisa mengkategorikan cerita tersebut.
                      <br/>
                      <Typography variant="subheading" className={classes.contenttext}>Romance</Typography>
                      Romance merupakan cerita tentang hubungan romansa antara dua individual atau terkadang perjuangan menyatukan kembali hubungan individual tersebut. Contoh dari kisah romansa adalah Pride and Prejudice karya Jane Austen.
                      <br/>
                      <Typography variant="subheading" className={classes.contenttext}>Short Story</Typography>
                      Cerita pendek merupakan cerita dengan narative singkat, biasanya lebih pendek ceritanya dibandingkan novel dan lebih padat. 
                  </DialogContent>
                </Dialog>
              </ListItem>
            </List>
          </div>
          <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} , made with{" "}
            <Favorite className={classes.icon} /> by{" "}
            Safira Virginindya
          </div>
        </div>
      </footer>
    );
  }  
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
