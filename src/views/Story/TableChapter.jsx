import React from 'react';
import PropTypes from 'prop-types';
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


const styles  = () =>  ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
});

//index
let index = 0;
function createData(chapterTitle, Edit, Status){
    index += 1;
    return{ index, chapterTitle, Edit, Status}
}

//data
const data =[
    createData(
        "Chapter 1",
        <div>
            <IconButton  aria-label="Edit">
                <EditIcon/>
            </IconButton>
            <IconButton aria-label="Delete">
                <DeleteIcon/>
            </IconButton>
        </div>,
        "Saved"
         ),
        createData(
        "Chapter 2",
        <div>
            <IconButton  aria-label="Edit">
                <EditIcon/>
            </IconButton>
            <IconButton aria-label="Delete">
                <DeleteIcon/>
            </IconButton>
        </div>,
        "Published"
        )
]

function TableChapter(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Chapter Title</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.index}>
                <TableCell component="th" scope="row">
                  {n.chapterTitle}
                </TableCell>
                <TableCell>{n.Edit}</TableCell>
                <TableCell>{n.Status}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

TableChapter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableChapter);