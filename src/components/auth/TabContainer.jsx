import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Paper, AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10 + theme.spacing.unit * 3,
    width: 500
  }
});

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class SimpleTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Paper className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
            <Tab label="Вход" />
            <Tab label="Регистрация" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <LoginForm />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <SignupForm />
          </TabContainer>
        )}
      </Paper>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleTabs);
