import React from "react"
import ReviewCard from "./ReviewCard.component"
import Carousel from "react-multi-carousel";

class ReviewPanel extends React.Component {
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
    let { items } = this.props
    return (
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
        {items.map((item, index) =>
          <ReviewCard
            key={index}
            keyVal={index * 10}
            authorName={item.author_name}
            authorRate={item.rating}
            authorImage={item.profile_photo_url}
            authorText={item.text}
            dateReview={item.relative_time_description}
            link={item.author_url}
          />
        )}
      </Carousel>
    )
  }
}

export default ReviewPanel