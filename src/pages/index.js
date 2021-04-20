import React from "react"
import { MuiThemeProvider, CssBaseline, Box } from "@material-ui/core"
import  {ArrowLeft, ArrowRight} from '@material-ui/icons'
import theme from '../themes/dark'
import BasicAppBar from "../components/BasicAppBar.component"
import { graphql, StaticQuery } from "gatsby"
import ReviewCard from "../components/ReviewCard.component"
import ScrollMenu from 'react-horizontal-scrolling-menu';

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

// One item component
// selected prop will be passed
const Review = ({text}) => {
  return <div
  >{text}</div>;
};

// All items component
// Important! add unique key
export const Reviews = (list) =>
  list.map(author => {
    return ;
  });

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
            <ScrollMenu
              arrowLeft={<ArrowLeft/>}
              arrowRight={<ArrowRight />}
              data={data.googlePlacesPlace.childrenGooglePlacesReview.map((author, index) => (
                <ReviewCard
                  authorName={author.author_name}
                  authorRate={author.rating}
                  authorImage={author.profile_photo_url}
                  authorText={author.text}
                />
              ))}
            />
          </React.Fragment>
      )}
      />
    );
  }
}
