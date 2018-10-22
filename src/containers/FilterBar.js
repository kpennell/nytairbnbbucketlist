import React from "react";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import AddLocation from "@material-ui/icons/AddLocation";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  header: {
    height: "65px",
    color: "#f44336",
    backgroundColor: "white",
    boxShadow: "none",
    borderBottom: "1px solid #e2e2e2",
    marginTop: 80
  },
  toolbar: {
    height: "65px",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 85px"
  },
  grid: {
    display: "flex",
    alignItems: "center"
  },
  root: {
    width: "100%"
  },

  buttons: {
    margin: "0 0px",
    minHeight: 20,
    padding: "5px 10px"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});

class FilterBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={24}>
              <Grid item className={classes.grid}>
                <Button
                  className={classes.buttons}
                  variant="outlined"
                  color="primary"
                >
                  Year
                </Button>
              </Grid>

              <Grid item className={classes.grid}>
                <div />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
FilterBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterBar);