import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Box, Grid } from "@material-ui/core"
import YouTube from "react-youtube"
import Gallery from "../components/Gallery.component"

class GalleryView extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      video: {
        height: window.innerWidth <= 600 ? '190' : '390',
        width: window.innerWidth <= 600 ? '340' : '640',
        id: "QlBzK9i3M-M",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      }
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query {
            allGooglePlacesPlace {
                nodes {
                  photos {
                    photo_reference
                  }
                }
              }
          }
      `}
        render={data => (
          <>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Box mt={2} />
              <YouTube videoId={this.state.video.id} opts={this.state.video} />
              <Box mt={2} />
              <Gallery photos={data.allGooglePlacesPlace.nodes[0].photos} />
              <Box mb={10} />
            </Grid>
          </>
        )}
      />
    )
  }
}

export default GalleryView