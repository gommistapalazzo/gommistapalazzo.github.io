import React from "react"
import { CssBaseline, Grid, Avatar, Typography, Box } from "@material-ui/core"
import theme from "../themes/dark"
import BasicAppBar from "../components/BasicAppBar.component"
import { graphql, StaticQuery } from "gatsby"
import "react-multi-carousel/lib/styles.css"
import ReviewPanel from "../components/ReviewPanel.component"
import { Rating } from "@material-ui/lab"
import InfoCard from "../components/InfoCard.component"
import { overrideThemeVariables } from "ui-neumorphism"
import GalleryView from "./gallery"
import ServicesComponent from "../components/Services.component"
import { Helmet } from "react-helmet"
import Loading from "../components/Loading"
import { ThemeProvider } from "@material-ui/core/styles"
import ReactLoading from "react-loading"

export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      pageName: "home",
      page: <Index />,
      ready: false
    }

    this.changePage = this.changePage.bind(this)
    this.loadDom = this.loadDom.bind(this)
  }

  componentDidMount() {
    overrideThemeVariables({
      "--light-bg": "#E9B7B9",
      "--light-bg-dark-shadow": "#ba9294",
      "--light-bg-light-shadow": "#ffdcde",
      "--dark-bg": theme.palette.background.default,
      "--dark-bg-dark-shadow": theme.palette.background.dark, //
      "--dark-bg-light-shadow": theme.palette.background.dark,
      "--primary": theme.palette.primary.main,
      "--primary-dark": theme.palette.primary.dark,
      "--primary-light": theme.palette.primary.light
    })
    this.loadDom()
  }

  changePage(value) {
    let page
    let pageName
    console.log("Value is: ", value)
    switch (value) {
      case "home":
        page = <Index />
        pageName = "home"
        break
      case "gallery":
        page = <GalleryView />
        pageName = "gallery"
        break
      case "info":
        page = <ServicesComponent />
        pageName = "info"
        break
      default:
        throw new Error("Error page not exist")
    }
    this.setState({
      page: page,
      pageName: pageName
    })
  }

  loadDom() {
    new Promise((resolve) => setTimeout(() => resolve(), 1000))
      .then(() => {
        // In case of error we can remove the loading view
        if (!this.state.ready)
          this.setState({ ready: true }) // showing the app
      })
  }

  render() {
    if (!this.state.ready)
      return <div className="loading-dom"><ReactLoading type="bars" /></div>
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Gommista Palazzo</title>
          <link rel="canonical" href="https://gommistapalazzo.github.io/" />
        </Helmet>
        <BasicAppBar child={this.state.page} value={this.state.pageName} changeValue={this.changePage} />
      </ThemeProvider>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
        query {
            googlePlacesPlace {
              name
              rating
              childrenGooglePlacesReview {
                author_name
                text
                rating
                profile_photo_url
                relative_time_description
                author_url
              }
              opening_hours {
                  open_now
                  weekday_text
                }
            }
          }
      `}
        render={data => (
          <>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item direction="row" xs={12}>
                <Avatar alt="Micheline icon"
                        src="https://github.com/gommistapalazzo/icons/blob/main/res/mipmap-xxxhdpi/ic_launcher.png?raw=true"
                        style={{
                          marginTop: 20,
                          width: theme.spacing(26),
                          height: theme.spacing(26)
                        }}
                />
              </Grid>
              <Grid item direction="row" xs={12}>
                <Typography color="textSecondary"
                            component="p"
                            style={{ wordWrap: "break-word", fontSize: 20, margin: 2 }}>
                  {data.googlePlacesPlace.name.split("-")[0]}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="textSecondary"
                            component="p"
                            justify="center"
                            style={{ wordWrap: "break-word", fontSize: 20, margin: 2 }}>
                  {data.googlePlacesPlace.name.split("-")[1]}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Rating name="half-rating-read"
                        style={{ content: "center" }}
                        defaultValue={data.googlePlacesPlace.rating}
                        precision={0.5}
                        readOnly
                />
              </Grid>
              <Grid item xs={12}>
                <InfoCard openingInfo={data.googlePlacesPlace.opening_hours} />
              </Grid>
            </Grid>
            <Box m={theme.spacing(1)}>
              <ReviewPanel items={data.googlePlacesPlace.childrenGooglePlacesReview} />
            </Box>
          </>
        )}
      />
    )
  }
}