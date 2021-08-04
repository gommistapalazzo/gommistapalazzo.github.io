import React from 'react'
import { Avatar, Grid, Typography } from "@material-ui/core"
import theme from "../themes/dark"
import ServiceModel from "../model/ServiceModel"
import ServicesGallery from "./ServicesGallery.component"

class ServicesComponent extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      listServices: []
    }
  }

  componentDidMount() {
    let listServices = []
    listServices.push(new ServiceModel("Sostituzione pneumatici", "Add a descriptions"));
    listServices.push(new ServiceModel("Ripararzione cerchi in lega", "add a descriptions"));
    listServices.push(new ServiceModel("Prenota il tuo servizio", "add a descriptions"));
    listServices.push(new ServiceModel("COVID 19", "add a descriptions"));
    this.setState({listServices: listServices});
  }

  render() {
    return <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Avatar alt="Micheline icon"
              src="https://github.com/gommistapalazzo/icons/blob/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true"
              style={{
                marginTop: 20,
                width: theme.spacing(26),
                height: theme.spacing(26)
              }}
      />
      <Typography color="textSecondary"
                  component="p"
                  style={{ wordWrap: "break-word", fontSize: 20, margin: 2 }}>
        Tutti i servizi da noi offerti
      </Typography>
      <ServicesGallery listServices={this.state.listServices}/>
    </Grid>
  }

}

export default ServicesComponent;