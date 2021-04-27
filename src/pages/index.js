import React from "react"
import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
import theme from '../themes/dark'
import BasicAppBar from "../components/BasicAppBar.component"
import { graphql, StaticQuery } from "gatsby"
import ReviewCard from "../components/ReviewCard.component"
import Carousel from 'react-material-ui-carousel'

export default class Home extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BasicAppBar child={<Index />} />
      </MuiThemeProvider>
    );
  }
}

class Index extends React.Component {
  render() {
    return(
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
        <React.Fragment>
            <Carousel
              autoPlay={true  }
            >
              {
                data.googlePlacesPlace.childrenGooglePlacesReview.map((author, index) => (
                  <ReviewCard
                    key={index}
                    authorName={author.author_name}
                    authorRate={author.rating}
                    authorImage={author.profile_photo_url}
                    authorText={author.text}
                  />
                ))
              }
            </Carousel>
          </React.Fragment>
      )}
      />
    );
  }
}
