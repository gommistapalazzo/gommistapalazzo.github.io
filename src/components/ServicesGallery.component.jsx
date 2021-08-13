import React from "react"
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core"

class ServicesGallery extends React.Component {
  render() {
    const { listServices } = this.props
    return <Grid
      container
      style={{marginTop: "1em"}}
      spacing={4}
      direction="column"
      alignItems="center"
      justify="center"
    >
      {listServices.map((service, index) => <Grid item key={index}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image={service.photoHome}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" color="textPrimary" component="h2">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Scopri di più
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  }
}

export default ServicesGallery