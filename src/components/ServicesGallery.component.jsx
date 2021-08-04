import React from "react"
import { CardActionArea, Grid } from "@material-ui/core"
import { Card } from "ui-neumorphism"

class ServicesGallery extends React.Component {
  render() {
    const {listServices} = this.props;
    return <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
    >
      {listServices.map((service, index) => <Grid item key={index}>
          <Card dark style={{margin: 10}}>
            <CardActionArea style={{padding: 10}}>
              <p>{service.name}</p>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  }
}
export default ServicesGallery;