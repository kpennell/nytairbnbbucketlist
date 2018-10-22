import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Launch from "@material-ui/icons/Launch";

const styles = theme => ({

  card: {
    width: 340,
    boxShadow: "none"
  },
  media: {
    height:220,
    objectFit: 'cover',
        borderRadius: 5
  },

  cardContentArea:{
    padding:"4px 0px"
  },
  year:{
    backgroundColor:"#A61D55",
    borderRadius:"3.2px",
    color:"white",
    padding:"0 4px"
  },
  yearArea:{
    textTransform:"uppercase",
    color:"#A61D55",
    fontWeight: 600,
    fontSize:12,
    lineHeight:"16px",
    paddingTop:4,
    
  },
  launchicon: {
    fontSize:12,

  },
  articleLink:{
    textDecoration:"none",
    color:"#A61D55",
  }
});

class LocationCard extends React.Component {
  render() {
    const { classes, location } = this.props;

    return (
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          
          className={classes.media}
         
          image={location.image1}
         
        />

        <CardContent className={classes.cardContentArea}>
          <Typography noWrap className={classes.yearArea} component="p">
           Featured in: <span className={classes.year}>{location.year}</span>  · <a href={location.article_link} className={classes.articleLink} target="_blank">Original Article <Launch className={classes.launchicon} /></a>
          </Typography>

          <Typography variant="h6" component="h2">
            {location.location_name}
          </Typography>
          <div className={classes.snippet_area}>
          <Typography className={classes.snippet_text} noWrap component="p">
           {location.clean_snippet} 
          </Typography>
          <Typography component="p">
          <a href={location.url} style={{textDecoration:"none", color:"#008489", fontWeight:600, fontSize:12}} className={classes.articleLink} target="_blank">Learn More</a>
          </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      
    </Card>
    )      
  }
}

LocationCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationCard);