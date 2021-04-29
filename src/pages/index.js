import React from "react"
import { MuiThemeProvider, CssBaseline, Grid, Avatar, Typography } from "@material-ui/core"
import theme from "../themes/dark"
import BasicAppBar from "../components/BasicAppBar.component"
import { graphql, StaticQuery } from "gatsby"

// import style
import "react-multi-carousel/lib/styles.css"
import ReviewPanel from "../components/ReviewPanel.component"
import { Rating } from "@material-ui/lab"

export default class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BasicAppBar child={<Index />} />
      </MuiThemeProvider>
    )
  }
}

class Index extends React.Component {
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
              <Avatar alt="Micheline icon"
                      src="https://github.com/gommistapalazzo/icons/blob/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true"
                      style={{
                        marginTop: 20,
                        width: theme.spacing(22),
                        height: theme.spacing(25)
                      }}
              />
              <Typography color="textSecondary"
                          component="p"
                          style={{ wordWrap: "break-word", fontSize: 20, margin: 2 }}>
                {data.googlePlacesPlace.name}
              </Typography>
              <Rating name="half-rating-read"
                      style={{ content: "center" }}
                      defaultValue={data.googlePlacesPlace.rating}
                      precision={0.5}
                      readOnly
              />
            </Grid>
            <ReviewPanel items={data.googlePlacesPlace.childrenGooglePlacesReview} />
          </>
        )}
      />
    )
  }
}