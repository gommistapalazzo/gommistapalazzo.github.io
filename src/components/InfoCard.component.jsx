import React from "react"
import { Card, CardActions, CardContent, IconButton, CardMedia, Grid, styled, Typography } from "@material-ui/core"
import { Call, Share, Facebook, LocationOn, Telegram } from "@material-ui/icons"
import "./layout.css"
import HelpIcon from "../imgs/help.svg"
import theme from "../themes/dark"

const DigitalTypography = styled(Typography)({
  wordWrap: "break-word",
  color: theme.palette.text.primary
})

class InfoCard extends React.Component {

  //TODO: load this from a configuration file
  redirectLink(serviceName) {
    switch (serviceName) {
      case "facebook":
        return "https://www.facebook.com/gommistapalazzocarmine";
      case "map":
        return "https://www.google.com/maps/dir//gommista+palazzo/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x133f42274dbf9017:0xdd2aee25ba26c472?sa=X&ved=2ahUKEwj265SJmt7yAhUYP-wKHX3ACn4Q9RcwFHoECFQQBA";
      case "call":
        return "https://www.facebook.com/gommistapalazzocarmine/about_contact_and_basic_info";
      case "telegram":
        return "https://t.me/gommistapalazzo_bot";
      default:
        throw Error("Services not available in this services")
    }
  }

  redirectToService(serviceName) {
    window.open(this.redirectLink(serviceName), '_blank', 'noopener,noreferrer')
  }

  render() {
    let { openingInfo } = this.props

    return (
      <Card className="time-card" elevation={4}>
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
        <CardActions>
          <Grid container
                direction="row"
                alignItems="center"
                justify="center"
                spacing={2}>
            <Grid item xs={3}>
              <IconButton onClick={() => this.redirectToService("call")}>
                <Call />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton onClick={() => this.redirectToService("facebook")}>
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton onClick={() => this.redirectToService("map")}>
                <LocationOn />
              </IconButton>
            </Grid>
            <Grid item xs={3}>
              <IconButton onClick={() => this.redirectToService("telegram")}>
                <Telegram />
              </IconButton>
            </Grid>
          </Grid>

        </CardActions>
      </Card>
    )
  }
}

export default InfoCard