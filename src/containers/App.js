import React, { Component } from "react";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Header from "../components/Header.js";
import FilterBar from "./FilterBar.js";
import SubtitleSection from "../components/SubtitleSection.js";
import LocationsGrid from "../components/LocationsGrid.js";

import bucketlistjson from "../data/bucketlist.json";

// http://nytrecsalaairbnb.surge.sh/

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ff8e8c",
      main: "#484848",
      dark: "#c62035",
      contrastText: "#fff"
    },
    secondary: {
      light: "#4da9b7",
      main: "#ff5a5f",
      dark: "#004e5a",
      contrastText: "#000"
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize:14,
    textTransform: "none",
    color: "#484848",
    button: {
      textTransform: "none"
    },
    subtitle1: {
      fontWeight: 600,
      color: "#484848",
      fontSize: 14
    },
    h6:{
      fontSize: 16,
      fontWeight: 600,
      color: "#484848",
    }
  }
});
// https://www.colourlovers.com/palette/3498539/airbnb

class App extends Component {
  state = { locations: bucketlistjson };

  render() {
    console.log(this.state.locations);

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Header />
          <FilterBar />
          <SubtitleSection />
          <LocationsGrid locations={this.state.locations} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;