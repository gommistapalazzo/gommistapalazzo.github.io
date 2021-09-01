import React from "react"
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction, Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer
} from "@material-ui/core"
import {Menu, Home, Info, Photo} from "@material-ui/icons"
import theme from '../themes/dark'
import Loading from "../components/Loading"

class BasicAppBar extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      ready: false,
      drawer: false
    }
    this.loadDom = this.loadDom.bind(this);
  }


  componentDidMount() {
    this.loadDom()
  }

  loadDom() {
    new Promise((resolve) => setTimeout(() => resolve(), 1000))
      .then(() => {
        // In case of error we can remove the loading view
        if (!this.state.ready)
          this.setState({ready: true}); // showing the app
      });
  }

  render() {
    const {child, value, changeValue} = this.props
    return (
      <Container maxWidth="xl">
        <Drawer open={this.state.drawer} onClose={() => this.setState({drawer: false}) }>
          <>TODO:</>
        </Drawer>
        <AppBar position="sticky" style={{
          backgroundColor: theme.palette.background.paper
        }}>
          <Toolbar>
            <IconButton onClick={()=> this.setState({drawer: true})} edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography color="textSecondary" variant="h6">
              Gommista Palazzo Carmine
            </Typography>
          </Toolbar>
        </AppBar>

        {this.state.ready ? child : <Loading />}
        <Box m={theme.spacing(2)}/>
        <AppBar position="fixed" className="navigation-style"
                 style={{ backgroundColor: theme.palette.background.paper }}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              this.setState({ready: false});
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

export default BasicAppBar;