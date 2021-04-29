import React from "react"
import { MuiThemeProvider, CssBaseline, Grid, Avatar, useMediaQuery } from "@material-ui/core"
import theme from "../themes/dark"
import BasicAppBar from "../components/BasicAppBar.component"
import { graphql, StaticQuery } from "gatsby"
import ReviewCard from "../components/ReviewCard.component"
import Carousel from "react-multi-carousel"

// import style
import "react-multi-carousel/lib/styles.css"

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
  constructor(props, context) {
    super(props, context)
    this.state = {
      responsive: {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
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
                        height: theme.spacing(30)
                      }}
              />
            </Grid>
            <Carousel
              wipeable={true}
              draggable={false}
              showDots={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              responsive={this.state.responsive}
            >
              {data.googlePlacesPlace.childrenGooglePlacesReview.map((item, index) =>
                <ReviewCard
                  keyVal={index}
                  authorName={item.author_name}
                  authorRate={item.rating}
                  authorImage={item.profile_photo_url}
                  authorText={item.text}
                  dateReview={item.relative_time_description}
                  link={item.author_url}
                />
              )}
            </Carousel>
          </>
        )}
      />
    )
  }
}

/**
 *
 */

/**
 *  {
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
 */