import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Box, CardActionArea, Grid, Container } from "@material-ui/core"
import Gallery from "../components/Gallery.component"
import { Card } from "ui-neumorphism"

class GalleryView extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <Container fixed>
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
                    <iframe className="video-style"
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
      </Container>
    )
  }
}

export default GalleryView