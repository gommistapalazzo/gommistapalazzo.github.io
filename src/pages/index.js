import React from "react"
import { MuiThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../themes/dark'

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
      </MuiThemeProvider>
    );
  }
}
