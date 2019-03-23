import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TabContainer from "./auth/TabContainer";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

class WelcomePage extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              React Chat
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center">
          <Grid item>
            <TabContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

WelcomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WelcomePage);
