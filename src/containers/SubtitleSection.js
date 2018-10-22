import React from "react";
import PropTypes from "prop-types";


import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

import FlightTakeoff from "@material-ui/icons/FlightTakeoff";

const styles = theme => ({
  
  root: {
    width: "100%",
    padding: "0 85px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  subtitle: {
    marginTop:"24px"
  },
  planeIcon: {
    color:"#F44436",
    marginTop: 15,
    marginRight: 15,
    fontSize: 35
  },
 
});

class SubtitleSection extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <FlightTakeoff color="secondary" className={classes.planeIcon} />
      <Typography variant="subtitle1" className={classes.subtitle} gutterBottom>
        Explore and Filter the New York Times recommended travel destinations since 2011. 
      </Typography>
        
      </div>
    );
  }
}

SubtitleSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubtitleSection);