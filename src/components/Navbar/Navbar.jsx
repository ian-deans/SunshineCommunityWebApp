import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import NavMenu from './NavMenu'

import './Navbar.scss'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }

    this.handleCollapse = this.handleCollapse.bind(this)
  }


  handleCollapse() {
    this.setState({ collapsed: !this.state.collapsed})
  }

  render() {

    const {collapsed} = this.state
    const {classes} = this.props    

    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            className={classes.menuButton} 
            onClick={() => this.handleCollapse()}
            color="inherit" 
            aria-label="Menu">
            {/* <MenuIcon /> */}M
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            The Sunshine Community
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      { !collapsed && <NavMenu /> }
    </div>
     
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)


/**
 *  <div className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              The Sunshine Community
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        
      </div>
 */