import React from 'react';
import PropTypes from 'prop-types';
import { Redirect} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";


//icon
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Visibility from "@material-ui/icons/Visibility";


const styles  = () =>  ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
  iconButton:{
    width: 30,
    height: 30
  }

});


class TableChapter extends React.Component {
  constructor(props){
    super(props);
    this.state={
      titleChapter: [],
      status: [],
      id: this.props.id,
      id_book: this.props.id_book,
      id_chapter: [], 
      edit: false,
      isDelete:false,
      chapterInfo: [
        {
          title: '',
          status: '',
          id: ''
        }
      ]
    }
  }

  //get data for title chapter and status
  componentDidMount(){
    this._isMounted = true;
    fetch('http://localhost:3001/chapter-info',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id: this.props.id,
          id_book: this.state.id_book                   
      })
    })
    .then(response => response.json())
    .then( data => {
      if(this._isMounted){
        this.setState({
          titleChapter: data.title,
          status: data.status,
          id_chapter: data.idChapter
        })
      }
    })
  } 
  
  componentWillUnmount(){
    this._isMounted = false;
  }

  //get titlechapter 
  getTitle = ( title, id_chapter) => {
    this.setState({ 
      titleCh: title, 
      idChapter: id_chapter
    })
  }

  //get titlechapter 
  getEditTitle = ( title, id_chapter) => {
    this.setState({ 
      titleChap: title,
      idChapter: id_chapter
    })
  }
  
  //get delete title
  getDeleteTitle = (id) => {
    this.deleteChapter(id);
  }

  //delete
  deleteChapter = (id) => {
    fetch('http://localhost:3001/delete-chapter',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id_book: this.state.id_book, 
          id_chapter: id
      })
    })
    .then(res => res.json())
    .then( del => {
      console.log(del)
      this.setState({
        isDelete: true
      })
      this.props.isDelete(this.state.isDelete)
    })
  }
  

  render(){
    // eslint-disable-next-line
    const { classes, ...rest } = this.props;
    const { titleChapter, status, id_book, id, titleCh, titleChap, id_chapter, idChapter} = this.state;
    console.log("table",this.state.isDelete)

    if(titleCh){
      return <Redirect to={{pathname: '/view-chapter',
          state:{ id: id, id_book: id_book, titleCh: titleCh, idChapter: idChapter}
        }}/>
    }

    if(titleChap){
      return <Redirect to={{pathname: '/edit-chapter',
          state:{ id: id, id_book: id_book, titleChap: titleChap, idChapter: idChapter}
        }}/>
    }

      

    return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <colgroup>
          <col style={{width: '50%'}}/>
          <col style={{width: '40%'}}/>
          <col style={{width: '10%'}}/>
        </colgroup>
        <TableHead>
          <TableRow>
            <TableCell>Chapter Title</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {titleChapter.map( (title, i) => {
          return(
            <TableRow key={i}>
              <TableCell >{title}</TableCell>
              <TableCell>
                <IconButton  onClick={ e => this.getTitle(title, id_chapter[i])} aria-label="View" classes={styles.iconStyle}>
                  <Visibility/>
                </IconButton>
                <IconButton onClick={ e => this.getEditTitle(title, id_chapter[i])} aria-label="Edit" classes={styles.iconStyle}>
                  <EditIcon/>
                </IconButton>
                <IconButton aria-label="Delete" classes={styles.iconStyle} onClick={ e => this.getDeleteTitle(id_chapter[i])}>
                  <DeleteIcon/>
                </IconButton>
              </TableCell>
              <TableCell>{status[i]}</TableCell>
            </TableRow>
          );
        })}
        </TableBody>
      </Table>
    </Paper>
  );
  }
  

  
}

TableChapter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableChapter);