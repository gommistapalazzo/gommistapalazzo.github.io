import React from "react"
import { Grid } from "@material-ui/core"
import ReviewCard from "./ReviewCard.component"
import Carousel from "react-material-ui-carousel"

function ReviewPanelMediaQuery({ items }) {
  //const matches = useMediaQuery("(min-width:900px)")
  let totalItems = 12; //matches === true ? 4 : 12
  //let spacing = totalItems < 12 ? 4 : 0

  return (
    <Carousel
      autoPlay={true}
      navButtonsAlwaysVisible={false}
      animation="slide"
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