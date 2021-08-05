import React from "react"
import {Card, CardContent, CardAction, IconButton} from "ui-neumorphism"
import { Box, CardMedia, Grid, styled, Typography } from "@material-ui/core"
import {Call, Share, Facebook} from "@material-ui/icons"
import 'ui-neumorphism/dist/index.css'
import './layout.css'
import HelpIcon from "../imgs/help.svg"
import CloseIcon from "../imgs/closed-sign.svg"
import theme from "../themes/dark"

const DigitalTypography = styled(Typography)({
  wordWrap: "break-word",
  color: theme.palette.text.primary,
  fontSize: 26,
  margin: 6,
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
                <DigitalTypography
                  key={index}
                  className="time-view"
                  color="textSecondary"
                  component="span">
                  {day.length <= 16 && <Grid container direction="row" alignItems="center">
                    <Grid item>
                      {day.replace("Chiuso", "")}
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
                  {day.length > 16 && day}
                </DigitalTypography>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <CardAction>
          <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                style={{padding: 30}}
                spacing={3}>
            <Grid item>
              <IconButton dark style={{marginLeft: 10, marginRight: 10, padding: 10}} rounded text={false} size='large'>
                <Call color={theme.palette.text.primary} />
              </IconButton>
              <IconButton dark style={{marginLeft: 10, marginRight: 10, padding: 10}} rounded text={false} size='large'>
                <Facebook color={theme.palette.text.primary}/>
              </IconButton>
              <IconButton dark style={{marginLeft: 10, marginRight: 10, padding: 10}} rounded text={false} size='large'>
                <Share color={theme.palette.text.primary}/>
              </IconButton>
            </Grid>
          </Grid>

        </CardAction>
      </Card>
    );
  }
}

export default InfoCard;