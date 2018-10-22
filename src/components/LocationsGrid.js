import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import LocationCard from "./LocationCard.js";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    padding: "0 85px",
    marginTop: 20,
    justifyContent: "flex-start"
  }
});

class LocationsGrid extends React.Component {
  render() {
    const { locations, classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          
          justify="flex-start"
          spacing={16}
        >
          {locations.map((location, index) => (
            <Grid key={index} item>
              <LocationCard location={location} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

LocationsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationsGrid);