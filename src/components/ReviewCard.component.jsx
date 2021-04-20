import React from "react"
import {
  Avatar, Box,
  Card,
  CardActionArea,
  CardContent, Grid, Paper,
  Typography
} from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import theme from "../themes/dark"

class ReviewCard extends React.Component {
  render() {
    const { authorName, authorRate, authorText, authorImage} = this.props
    return (
      <Box width={1 / 4} borderRadius={16} style={{margin: 6}}>
        <Paper elevation={5}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Grid container justify="center" spacing={1}>
                  <Grid item xs={3} />
                  <Grid item xs={6} style={{ content: "center" }}>
                    <Rating name="half-rating-read"
                            defaultValue={authorRate}
                            precision={0.5}
                            readOnly
                    />
                  </Grid>
                  <Grid item xs={3} />
                  <Grid item xs={12}>
                    <Box fontStyle="oblique"
                         fontFamily="Roboto"
                    >
                      <Typography
                        align="center"
                        color="textPrimary"
                        variant="body2"component="p">
                        {`"${authorText}"`}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Avatar alt="avatar review" style={{
                      width: theme.spacing(7),
                      height: theme.spacing(7)
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
            </CardActionArea>
          </Card>
        </Paper>
      </Box>
    )
  }
}

export default ReviewCard