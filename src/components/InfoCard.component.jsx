import React from "react"
import { Card, CardContent, CardAction, IconButton } from "ui-neumorphism"
import { CardMedia, Grid, styled, Typography } from "@material-ui/core"
import { Call, Share, Facebook, Map, LocationOn } from "@material-ui/icons"
import "ui-neumorphism/dist/index.css"
import "./layout.css"
import HelpIcon from "../imgs/help.svg"
import theme from "../themes/dark"

const DigitalTypography = styled(Typography)({
  wordWrap: "break-word",
  color: theme.palette.text.primary
})

class InfoCard extends React.Component {
  render() {
    let { openingInfo, style } = this.props

    return (
      <Card className="time-card" style={style} dark elevation={4}>
        <CardContent>
          <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                spacing={3}>
            <Typography color="textSecondary"
                        component="span"
                        justify="center"
                        style={{ wordWrap: "break-word", fontSize: "2em" }}>
            </Typography>
            <CardMedia
              style={{ width: 80, height: 80 }}
              image={HelpIcon}
              title="Paella dish"
            />
            {openingInfo.weekday_text.map((day, index) =>
              <Grid container direction="column" alignItems="center" justify="center">
                <Grid key={index * 20} item xs={12} direction="row">
                  <DigitalTypography
                    key={index * 40 + 1}
                    className="time-day"
                    style={{ color: theme.palette.primary.light }}
                    component="span">
                    {day.split(":")[0]}
                  </DigitalTypography>
                </Grid>
                <Grid key={index * 30 + 2} item xs={12} direction="row" justify="center">
                  <DigitalTypography
                    key={index * 50 + 3}
                    className="time-view"
                    color="textSecondary"
                    component="p">
                    {day.split(":").map((val, index) => index === 0 ? "" : (index === day.split(":").length - 1 ? val : val + ":"))}
                  </DigitalTypography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <CardAction>
          <Grid container
                direction="row"
                alignItems="center"
                justify="center"
                style={{ padding: 30 }}
                spacing={3}>
            <Grid item xs={3}>
              <IconButton dark style={{ marginLeft: 10, marginRight: 10, padding: 10 }} rounded text={false}
                          size="large">
                <Call />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton dark style={{ marginLeft: 10, marginRight: 10, padding: 10 }} rounded text={false}
                          size="large">
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton dark style={{ marginLeft: 10, marginRight: 10, padding: 10 }} rounded text={false}
                          size="large">
                <LocationOn />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton dark style={{ marginLeft: 10, marginRight: 10, padding: 10 }} rounded text={false}
                          size="large">
                <Share />
              </IconButton>
            </Grid>
          </Grid>

        </CardAction>
      </Card>
    )
  }
}

export default InfoCard