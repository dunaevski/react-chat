import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Typography
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const styles = theme => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class SignupForm extends React.Component {
  state = {
    username: {
      value: "",
      isValid: true
    },
    password: {
      value: "",
      isValid: true
    },
    repeatedPassword: {
      value: "",
      isValid: true
    }
  };

  validate = () => {
    const { password, repeatedPassword } = this.state;
    const isValid = password.value === repeatedPassword.value;

    this.setState({
      password: { ...password, isValid },
      repeatedPassword: { ...repeatedPassword, isValid }
    });

    return isValid;
  };

  handleInputChange = event => {
    event.persist();
    const { name, value } = event.target;
    this.setState(prevState => ({
      [name]: {
        ...prevState[name],
        value
      }
    }));
  };

  handleSubmit = event => {
    event.preventDefault();

    if (!this.validate()) {
      return;
    }

    const { username, password } = this.state;

    this.props.onSubmit(username.value, password.value);
    
  };

  render() {
    const { classes } = this.props;
    const { username, password, repeatedPassword } = this.state;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Логин</InputLabel>
              <Input
                id="username"
                value={username.value}
                onChange={this.handleInputChange}
                name="username"
                autoComplete="username"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Пароль</InputLabel>
              <Input
                id="password"
                value={password.value}
                onChange={this.handleInputChange}
                name="password"
                type="password"
                autoComplete="current-password"
                error={!password.isValid}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="repeatedPassword">
                Подтвердить пароль
              </InputLabel>
              <Input
                id="repeatedPassword"
                value={repeatedPassword.value}
                onChange={this.handleInputChange}
                name="repeatedPassword"
                type="password"
                autoComplete="current-repeatedPassword"
                error={!repeatedPassword.isValid}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить меня"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Регистрация
            </Button>
          </form>
        </div>
      </main>
    );
  }
}

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignupForm);
