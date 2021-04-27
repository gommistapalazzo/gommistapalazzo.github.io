import React from "react"
import { MuiThemeProvider, CssBaseline, Grid, Avatar } from "@material-ui/core"
import theme from "../themes/dark"
import BasicAppBar from "../components/BasicAppBar.component"
import { graphql, StaticQuery } from "gatsby"
import ReviewCard from "../components/ReviewCard.component"
import Carousel from "react-material-ui-carousel"

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
              }
              user_ratings_total
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
                        width: theme.spacing(30),
                        height: theme.spacing(30),
                      }}
              />
            </Grid>
            <Carousel
              autoPlay={true}
              navButtonsAlwaysVisible={false}
              animation="slide"
            >
              {
                data.googlePlacesPlace.childrenGooglePlacesReview.map((author, index) => (
                  <ReviewCard
                    keyVal={index}
                    authorName={author.author_name}
                    authorRate={author.rating}
                    authorImage={author.profile_photo_url}
                    authorText={author.text}
                  />
                ))
              }
            </Carousel>
          </>
        )}
      />
    )
  }
}
