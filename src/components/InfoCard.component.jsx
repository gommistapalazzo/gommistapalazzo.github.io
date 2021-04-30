import React from "react"
import {Card, CardContent, CardAction, IconButton} from "ui-neumorphism"
import { Box, CardMedia, Grid, styled, Typography } from "@material-ui/core"
import {Call} from "@material-ui/icons"
import 'ui-neumorphism/dist/index.css'
import './layout.css'
import HelpIcon from "../imgs/help.svg"
import CloseIcon from "../imgs/closed-sign.svg"

const DigitalTypography = styled(Typography)({
  fontFamily: "DS-Digital Italic",
  wordWrap: "break-word",
  fontSize: 26,
  margin: 2,
});

class InfoCard extends React.Component {
  render() {
    let {openingInfo, style} = this.props;

    return (
      <Card style={style} dark elevation={4}>
        <CardContent>
          <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                style={{padding: 30}}
                spacing={3}>
            <Typography color="textSecondary"
                        component="span"
                        justify="center"
                        style={{ wordWrap: "break-word", fontSize: 30 }}>
            </Typography>
            <CardMedia
              style={{width: 80, height: 80}}
              image={HelpIcon}
              title="Paella dish"
            />
            {openingInfo.weekday_text.map((day, index) =>
              <Grid key={index} container direction="row" justify="center">
                <Grid item>
                  <Typography color="textSecondary"
                              component="span"
                              justify="center"
                              style={{ wordWrap: "break-word", fontSize: 26, margin: 2 }}>
                    {day.split(":")[0].charAt(0).toUpperCase() + day.split(":")[0].slice(1)}
                  </Typography>
                </Grid>
                <Box mr={4} />
                <DigitalTypography
                  key={index}
                  color="textSecondary"
                  component="span">
                  {day.split(":").length < 3 && <Grid container direction="row" alignItems="center">
                    <Grid item>
                      {day.substring(day.split(":")[0].length + 1, day.length)}
                    </Grid>
                    <Box mr={6} />
                    <Grid item>
                      <CardMedia
                        style={{width: 60, height: 60}}
                        image={CloseIcon}
                        title="Paella dish"
                      />
                    </Grid>
                  </Grid>
                  }
                  {day.split(":").length >= 3 && day.substring(day.split(":")[0].length + 1, day.length)}
                </DigitalTypography>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <CardAction>
          <IconButton rounded text={false} size='large'>
            <Call />
          </IconButton>
        </CardAction>
      </Card>
    );
  }
}

export default InfoCard;