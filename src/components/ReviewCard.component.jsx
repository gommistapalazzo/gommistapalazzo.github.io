import React from "react"
import {
  Avatar, Box,
  Card, CardActions,
  CardContent, CardHeader, Grid, IconButton,
  Typography
} from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import {OpenInBrowser} from "@material-ui/icons"
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
              color="textSecondary"
              component="p"
              style={{ wordWrap: "break-word", fontSize: 14, margin: 2 }}
            >
              {`${dateReview}`}
            </Typography>

          }
        />
        <CardContent>
          <Box
            fontSize="h2"
            component="div"
            overflow="hidden"
            whiteSpace="pre-line"
            textOverflow="ellipsis"
            align="center"
            color="textPrimary"
            height={50}
          >
            {`"${authorText}"`}
          </Box>
        </CardContent>
        <CardActions disableSpacing >
          <Grid container alignItems="center"
                justify="center" spacing={3}>
            <Grid item xs={3} />
            <Grid item xs={5}>
              <Rating name="half-rating-read"
                      style={{ content: "center" }}
                      defaultValue={authorRate}
                      precision={0.5}
                      readOnly
              />
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              size={10}
              aria-label="share"
              onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}>
              <OpenInBrowser style={{ color: theme.palette.text.primary }} />
            </IconButton>
          </Grid>
        </CardActions>
      </Card>
    )
  }
}

export default ReviewCard