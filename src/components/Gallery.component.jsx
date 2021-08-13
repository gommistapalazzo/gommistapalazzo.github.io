import React from "react"
import {CardActionArea, CardMedia, Grid } from "@material-ui/core"
import {Card} from "ui-neumorphism"
import Loading from "./Loading"

class Gallery extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      ready: false
    }
    this.makeUrl = this.makeUrl.bind(this);
    this.loadImage = this.loadImage.bind(this);
  }

  componentDidMount() {
    this.loadImage();
  }

  makeUrl(idPhoto) {
    // maxwidth=$maxwidth&
    return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${idPhoto}&key=${process.env.GATSBY_GOOGLE_PLACES}`
  }

  loadImage() {
    new Promise((resolve) => setTimeout(() => resolve(), 1000))
      .then(() => {
        // In case of error we can remove the loading view
        if (!this.state.ready)
          this.setState({ready: true}); // showing the app
      });
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
                visibled={this.state.ready}
                component="img"
                alt="Contemplative Reptile"
                height="350"
                image={this.makeUrl(photo.photo_reference)}
                title="Contemplative Reptile"
              />
              {!this.state.ready && <Loading />}
            </CardActionArea>
          </Card>
          </Grid>
        )}
      </Grid>
    )
  }
}

export default Gallery;