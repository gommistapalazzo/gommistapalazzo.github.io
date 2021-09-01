import React from "react"
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction, Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
  Drawer, makeStyles, Divider, ListItem, ListItemIcon, ListItemText, List
} from "@material-ui/core"
import { Menu, Home, Info, Photo, Inbox, Mail, ChevronRight, ChevronLeft } from "@material-ui/icons"
import theme from "../themes/dark"
import Loading from "../components/Loading"
import clsx from "clsx"

const drawerWidth = 240

class BasicAppBar extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      ready: false,
      drawer: false
    }
    this.loadDom = this.loadDom.bind(this)
    this.navigateDrawer = this.navigateDrawer.bind(this)
    this.getColor = this.getColor.bind(this)
  }


  componentDidMount() {
    this.loadDom()
  }

  loadDom() {
    new Promise((resolve) => setTimeout(() => resolve(), 1000))
      .then(() => {
        // In case of error we can remove the loading view
        if (!this.state.ready)
          this.setState({ ready: true }) // showing the app
      })
  }

  navigateDrawer(value, callback) {
    callback(value)
    this.setState({ drawer: false })
  }

  getColor(value, actualValue) {
    if (value === actualValue)
      return theme.palette.primary.main
    return theme.palette.text.primary
  }

  render() {
    const { child, value, changeValue } = this.props
    return (
      <Container>
          <Drawer openSecondary={true} open={this.state.drawer}
                  onClose={() => this.setState({ drawer: false })}>
            <List>
              <ListItem button key={"home"} onClick={() => this.navigateDrawer("home", changeValue)}>
                <ListItemIcon><Home style={{ color: this.getColor("home", value) }} /></ListItemIcon>
                <ListItemText primary={"home"} style={{ color: this.getColor("home", value) }} />
              </ListItem>
              <ListItem button key={"info"} onClick={() => this.navigateDrawer("info", changeValue)}>
                <ListItemIcon><Info style={{ color: this.getColor("info", value) }} /></ListItemIcon>
                <ListItemText primary={"info"} style={{ color: this.getColor("info", value) }} />
              </ListItem>
              <ListItem button key={"gallery"} onClick={() => this.navigateDrawer("gallery", changeValue)}>
                <ListItemIcon><Photo style={{ color: this.getColor("gallery", value) }} /></ListItemIcon>
                <ListItemText primary={"gallery"} style={{ color: this.getColor("gallery", value) }} />
              </ListItem>
            </List>

            <div className="wrapper">
              Powered by @vincenzopalazzo
            </div>
          </Drawer>
        <AppBar position="sticky" style={{
          backgroundColor: theme.palette.background.paper
        }}>
          <Toolbar>
            <IconButton onClick={() => this.setState({ drawer: true })} edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography color="textSecondary" variant="h6">
              Gommista Palazzo Carmine
            </Typography>
          </Toolbar>
        </AppBar>

        {this.state.ready ? child : <Loading />}
        <Box m={theme.spacing(2)} />
        <AppBar position="fixed" className="navigation-style"
                style={{ backgroundColor: theme.palette.background.paper }}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              this.setState({ ready: false })
              changeValue(newValue)
              this.loadDom()
            }}
          >
            <BottomNavigationAction label="Galleria" value="gallery" icon={<Photo />} />
            <BottomNavigationAction label="Home" value="home" icon={<Home />} />
            <BottomNavigationAction label="Servizi" value="info" icon={<Info />} />
          </BottomNavigation>
        </AppBar>
      </Container>
    )
  }
}

export default BasicAppBar