import React from "react"
import {CardActionArea, CardActions, CardMedia, Grid } from "@material-ui/core"
import {Button, Card} from "ui-neumorphism"

class Gallery extends React.Component {

  constructor(props, context) {
    super(props, context)

    this.makeUrl = this.makeUrl.bind(this);
  }

  makeUrl(idPhoto) {
    // maxwidth=$maxwidth&
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${idPhoto}&key=${process.env.GATSBY_GOOGLE_PLACES}`
  }

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
          <Card dark style={{margin: 10}}>
            <CardActionArea style={{padding: 10}}>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image={this.makeUrl(photo.photo_reference)}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          </Grid>
        )}
      </Grid>
    )
  }
}

/**
 * <CardActions>
 <Button dark size="small" color="primary">
 Share
 </Button>
 <Button dark size="small" color="primary">
 Learn More
 </Button>
 </CardActions>
 */
export default Gallery;