import React, { Component } from 'react'
import { withStyles, MuiThemeProvider } from 'material-ui/styles'
import classNames from 'classnames'
import theme from './fusTheme'
import TopBar from './appBar'
import SideBar from './drawer'
import styles from './styles'

class Layout extends Component {
  componentWillMount () {
    if (window.innerWidth < 770) {
      this.setState({
        open: false
      })
    }
  }
  constructor () {
    super()
    this.state = {
      open: true,
      anchorEl: null,
      openMenu: false
    }
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this)
    this.handleDrawerClose = this.handleDrawerClose.bind(this)
  }
  handleDrawerOpen () {
    this.setState({ open: true })
  }
  handleDrawerClose () {
    this.setState({ open: false })
  }
  handleClick = e => {
    this.setState({ openMenu: true, anchorEl: e.currentTarget })
  }
  handleRequestClose = () => {
    this.setState({ openMenu: false })
  }

  render () {
    const classes = this.props.classes
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <TopBar
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            classes={this.props.classes}
            openMenu={this.state.openMenu}
            handleDrawerOpen={this.handleDrawerOpen}
            handleClick={this.handleClick}
            handleRequestClose={this.handleRequestClose}
          />
          <SideBar
            open={this.state.open}
            classes={this.props.classes}
            handleDrawerClose={this.handleDrawerClose}
          />
          <div className={classes.appFrame}>
            <main
              className={classNames(
                classes.content,
                this.state.open && classes.contentShift
              )}
            >
              {this.props.children}
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Layout)
