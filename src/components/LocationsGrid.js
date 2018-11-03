import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LocationCard from "./LocationCard.js";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import memoize from "memoize-one";

const CARD_SIZE = 340;

const styles = theme => ({
  root: {
    padding: "0 85px",
    marginTop: 20,
    justifyContent: "flex-start"
  },
  Row: {
    display: "flex",
    justifyContent: "space-around",
  }
});

class Row extends PureComponent {
  render() {
    const { data, index, style } = this.props;
    const { classes, itemsPerRow, locations } = data;
 
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, locations.length);

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <LocationCard key={i} location={locations[i]} />
      );
    }

    return (
      <div className={classes.Row} style={style}>
        {items}
      </div>
    );
  }
}

class LocationsGrid extends PureComponent {
  getItemData = memoize((classes, itemsPerRow, locations) => ({
    classes,
    itemsPerRow,
    locations
  }))

  render() {
    const { locations, classes } = this.props;

    return (
      <div style={{ marginTop: "10px", height: "80vh" }}>
        <AutoSizer>
          {({ height, width }) => {
            const itemsPerRow = Math.floor(width / CARD_SIZE) || 1;
            const rowCount = Math.ceil(locations.length / itemsPerRow);
            const itemData = this.getItemData(classes, itemsPerRow, locations);
      
            return (
              <div>
                <List
                  height={height}
                  itemCount={rowCount}
                  itemData={itemData}
                  itemSize={CARD_SIZE}
                  width={width}
                >
                  {Row}
                </List>
              </div>
            );
          }}
        </AutoSizer>
      </div>
    );
  }
}

LocationsGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationsGrid);