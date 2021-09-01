import React from "react"
import {
  Avatar,
  Card, CardActions,
  CardContent, CardHeader, Grid, IconButton,
  Typography
} from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import {Link} from "@material-ui/icons"
import theme from "../themes/dark"

class ReviewCard extends React.Component {

  render() {
    const { authorName, authorRate, authorText, authorImage, keyVal, dateReview, link } = this.props
    return (
      <Card key={keyVal} style={{margin: 6}}>
        <CardHeader
          avatar={
            <Avatar alt="avatar reviewer" style={{
              width: theme.spacing(7),
              height: theme.spacing(7)
            }} src={authorImage} />
          }
          title={authorName}
          subheader={
            <Typography
              noWrap={false}
              color="textSecondary"
              component="p"
              style={{ wordWrap: "break-word", fontSize: 14, margin: 2 }}
            >
              {`${dateReview}`}
            </Typography>

          }
        />
        <CardContent>
          <Typography
            noWrap={true}
            color="textSecondary"
            style={{fontSize: 15}}
          >
              {`"${authorText}"`}
            </Typography>
        </CardContent>
        <CardActions disableSpacing >
          <Grid container direction="row" alignItems="center"
                justify="center" spacing={3}>
              <Rating name="half-rating-read"
                      defaultValue={authorRate}
                      precision={0.5}
                      readOnly
              />
          </Grid>
          <Grid item xs={2}>
            <IconButton
              size="medium"
              aria-label="share"
              onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}>
              <Link style={{ color: theme.palette.text.primary }} />
            </IconButton>
          </Grid>
        </CardActions>
      </Card>
    )
  }
}

export default ReviewCard