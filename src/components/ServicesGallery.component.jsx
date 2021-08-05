import React from "react"
import { Button, CardActionArea, CardActions, Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core"

class ServicesGallery extends React.Component {
  render() {
    const { listServices } = this.props
    return <Grid
      container
      spacing={4}
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
                <Typography gutterBottom variant="h5" component="h2">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {service.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
    </Grid>
  }
}

export default ServicesGallery