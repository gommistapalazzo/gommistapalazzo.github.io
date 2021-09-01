import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Box, CardActionArea, Grid } from "@material-ui/core"
import Gallery from "../components/Gallery.component"
import { Card } from "ui-neumorphism"

class GalleryView extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      video: {
        width: "200%",
        id: "QlBzK9i3M-M",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      }
    }
  }

  render() {
    return (
      <>
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
            <Grid
              container
              spacing={3}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12}>
                <Card dark>
                  <CardActionArea>
                    <iframe style={{position: "relative", height: "45vh", width: "45vw", margin: 10}}
                            src="https://www.youtube.com/embed/QlBzK9i3M-M"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12}>
                  <Gallery photos={data.allGooglePlacesPlace.nodes[0].photos} />
              </Grid>
              <Box mb={10} />
            </Grid>
          )}
        />
      </>
    )
  }
}

export default GalleryView