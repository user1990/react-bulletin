import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import ViewQuiltIcon from 'material-ui-icons/ViewQuilt'
import SearchIcon from 'material-ui-icons/Search'
import PrintIcon from 'material-ui-icons/Print'
import MoreVertIcon from 'material-ui-icons/MoreVert'
import Menu, { MenuItem } from 'material-ui/Menu'
import classNames from 'classnames'

const TopBar = ({
  classes,
  open,
  openMenu,
  handleClick,
  handleDrawerOpen,
  handleRequestClose,
  anchorEl
}) => {
  return (
    <div>
      <AppBar
        className={classNames(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar disableGutters={!open}>
          <IconButton
            color="contrast"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={classNames(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            type="title"
            color="inherit"
            className={classes.flex}
            noWrap
          >
            FUS Bulletin
          </Typography>
          <IconButton color="contrast" aria-label="More">
            <SearchIcon />
          </IconButton>
          <IconButton color="contrast" aria-label="More">
            <ViewQuiltIcon />
          </IconButton>
          <IconButton color="contrast" aria-label="More">
            <PrintIcon />
          </IconButton>
          <IconButton
            color="contrast"
            aria-label="More"
            aria-owns={openMenu ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onRequestClose={handleRequestClose}
          >
            <MenuItem onClick={handleRequestClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopBar
