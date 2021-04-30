import React from "react"
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Container,
  IconButton,
  Toolbar,
  Typography,
  withStyles
} from "@material-ui/core"
import {Menu, Home, Info, Photo} from "@material-ui/icons"
import theme from '../themes/dark'

const WhiteTextTypography = withStyles({
  root: {
    color: theme.palette.text.primary
  }
})(Typography);

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
            <WhiteTextTypography variant="h6">
              Gommista Palazzo Carmine
            </WhiteTextTypography>
          </Toolbar>
        </AppBar>
        {child}
        <AppBar position="fixed" style={{
          backgroundColor: theme.palette.background.paper,
          top: "auto",
          bottom: 0,
        }}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => changeValue(newValue)}
          >
            <BottomNavigationAction label="Services" value="gallery" icon={<Photo />} />
            <BottomNavigationAction label="Home" value="home" icon={<Home />} />
            <BottomNavigationAction label="Info" value="info" icon={<Info />} />
          </BottomNavigation>
        </AppBar>
      </Container>
    )
  }
}

export default BasicAppBar;