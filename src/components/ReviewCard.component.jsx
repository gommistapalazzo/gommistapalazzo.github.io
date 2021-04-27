import React from "react"
import {
  Avatar, Box,
  Card,
  CardContent, Grid, Paper,
  Typography
} from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import theme from "../themes/dark"

class ReviewCard extends React.Component {
  render() {
    const { authorName, authorRate, authorText, authorImage, keyVal } = this.props
    return (
      <Box key={keyVal} borderRadius={16} style={{ margin: 6 }}>
        <Paper elevation={5}>
          <Card>
            <CardContent>
              <Grid container
                    alignItems="center"
                    justify="center"
                    spacing={1}>
                <Grid item xs={4} />
                <Grid item xs={4} style={{ content: "center" }}>
                  <Rating name="half-rating-read"
                          style={{ content: "center" }}
                          defaultValue={authorRate}
                          precision={0.5}
                          readOnly
                  />
                </Grid>
                <Grid item xs={4} />
                <Grid item xs={12}>
                  <Box fontStyle="oblique"
                       fontFamily="Roboto"
                  >
                    <Typography
                      align="center"
                      color="textPrimary"
                      variant="body2"
                      component="p"
                      style={{ wordWrap: "break-word" }}
                    >
                      {`"${authorText}"`}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} />
                <Grid item xs={6}>
                  <Avatar alt="avatar review" style={{
                    width: theme.spacing(13),
                    height: theme.spacing(13)
                  }} src={authorImage} />
                  <Typography variant="body2" color="textPrimary" component="p">
                    <Box fontStyle="normal">
                      {authorName}
                    </Box>
                  </Typography>
                </Grid>
                <Grid item xs={6} />
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Box>
    )
  }
}

export default ReviewCard