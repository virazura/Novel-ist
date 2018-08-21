import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
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
  componentWillMount(){
    fetch('http://localhost:3001/chapter-info',{
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          id: this.state.id,                   
      })
    })
    .then(response => response.json())
    .then( data => {
      this.setState({
        titleChapter: data.title,
        status: data.status,
      })
    })
  }  

  render(){
    const { classes, ...rest } = this.props;
    const { titleChapter, status, id} = this.state;
    
    const visible = 
    <Link to={{ 
      pathname: '/read-story',
      state: {id: id}
    }}
    >
      <IconButton  aria-label="Edit" classes={styles.iconStyle}>
        <Visibility/>
      </IconButton>
    </Link>
    const editBtnIcon = 
      <IconButton  aria-label="Edit" classes={styles.iconStyle}>
        <EditIcon/>
      </IconButton>
    
    const deleteIcon = 
      <IconButton aria-label="Delete" classes={styles.iconStyle}>
        <DeleteIcon/>
      </IconButton>
    
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
              <TableCell>{title}</TableCell>
              <TableCell>
              {visible}
              {editBtnIcon}
              {deleteIcon}
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