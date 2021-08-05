import React from "react"
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction, Box,
  Container,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core"
import {Menu, Home, Info, Photo} from "@material-ui/icons"
import theme from '../themes/dark'

class BasicAppBar extends React.Component {
  render() {
    const {child, value, changeValue} = this.props
    return (
      <Container maxWidth="xl">
        <AppBar position="sticky" style={{
          backgroundColor: theme.palette.background.paper
        }}>
          <Toolbar>
            <IconButton onClick={()=> console.log("Click on menu icon")} disabled={true} edge="start" color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Typography color="textSecondary" variant="h6">
              Gommista Palazzo Carmine
            </Typography>
          </Toolbar>
        </AppBar>
        {child}
        <Box m={theme.spacing(2)}/>
        <AppBar position="fixed" className="navigation-style"
                 style={{ backgroundColor: theme.palette.background.paper }}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => changeValue(newValue)}
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