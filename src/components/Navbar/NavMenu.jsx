import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '30%',
    marginTop: 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 200,
  },
}

const NavMenu = props => {

  const {classes} = props

  return  (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{"Home" /*title of current page*/}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          <TableRow>
            <TableCell>
              Home
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              Messages
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              Friends
            </TableCell>
          </TableRow>

        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(NavMenu);