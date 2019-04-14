import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Grid,
  Toolbar
} from "@material-ui/core";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import ErrorMessage from "./ErrorMessage";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    flexGrow: 1,
    marginTop: 10 + theme.spacing.unit * 3,
    width: 500
  }
});

class WelcomePage extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    recieveAuth: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    error: PropTypes.instanceOf(Error)
  };

  static defaultProps = {
    error: null
  };

  state = {
    value: 0
  };

  componentDidMount() {
    this.props.recieveAuth();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes, signup, login, isAuthenticated, error } = this.props;
    const { value } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/chat" />;
    }

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
            <Paper className={classes.paper}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={this.handleChange}
                  variant="fullWidth"
                >
                  <Tab label="Вход" />
                  <Tab label="Регистрация" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {value === 0 && <LoginForm onSubmit={login} />}
                {value === 1 && <SignupForm onSubmit={signup} />}
              </div>
            </Paper>
          </Grid>
        </Grid>
        <ErrorMessage error={error} />
      </div>
    );
  }
}

WelcomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WelcomePage);
