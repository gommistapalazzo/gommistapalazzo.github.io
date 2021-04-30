import React from "react"
import { Card, CardActionArea, CardActions, CardMedia, Grid } from "@material-ui/core"
import {Button} from "ui-neumorphism"

class Gallery extends React.Component {
  render() {
    let {photos} = this.props;
    return (
      <Grid
        container
        spacing={0}
        alignItems="center"
        justify="center"
      >
        {photos.map((photo, index) => <Grid item key={index}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={photo.html_attributions[0].match(/\bhttps?:\/\/\S+/gi)[0]}
                title="Contemplative Reptile"
              />
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
    )
  }
}

export default Gallery;