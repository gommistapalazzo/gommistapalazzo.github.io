import React from "react"
import { Grid, useMediaQuery } from "@material-ui/core"
import ReviewCard from "./ReviewCard.component"
import Carousel from "react-multi-carousel";

function ReviewPanelMediaQuery({ items }) {
  let totalItems = 12; //matches === true ? 4 : 12
  //let spacing = totalItems < 12 ? 4 : 0

  let component = undefined;

  return (
      <Carousel
        s
        transitionDuration={500}
        autoPlaySpeed={10}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
      >
        {items.map((item, index) =>
          <Grid item xs={totalItems} key={index}>
            <ReviewCard
              authorName={item.author_name}
              authorRate={item.rating}
              authorImage={item.profile_photo_url}
              authorText={item.text}
            />
          </Grid>
        )}
      </Carousel>
  )
}

class ReviewPanel extends React.Component {

  render() {
    let { items } = this.props
    return (
        <ReviewPanelMediaQuery items={items} />
    )
  }
}

export default ReviewPanel