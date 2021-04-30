import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Box, Grid } from "@material-ui/core"
import YouTube from "react-youtube"

class GalleryView extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      video : {
        id: "QlBzK9i3M-M",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      }
    }
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
        query {
            googlePlacesPlace {
              name
              rating
              childrenGooglePlacesReview {
                author_name
                text
                rating
                profile_photo_url
                relative_time_description
                author_url
              }
              opening_hours {
                  open_now
                  weekday_text
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
            </Grid>
          </>
        )}
      />
    );
  }
}
export default GalleryView;