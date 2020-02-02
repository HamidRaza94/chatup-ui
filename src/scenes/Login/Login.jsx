import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Fab, InputAdornment, CircularProgress } from '@material-ui/core';
import { MailOutline, LockOpen, ArrowForward } from '@material-ui/icons';
import classNames from 'classnames';
import Cookies from 'js-cookie'
import axios from 'axios';

import { ToolTip } from '../../components';
import { withSnackBarConsumer } from '../../hoc';
import useStyles from './styles';
import { login } from '../../cms';
import loginSchema from './validations';
import { GENERAL } from '../../libs/constants';

const Login = ({ history, openSnackBar }) => {
  const [success, error] = GENERAL.snackBarType;
  const classes = useStyles();
  const initialTouch = { email: false, password: false };
  const initialErrors = { email: '', password: '' };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touch, setTouch] = useState(initialTouch);
  const [errors, setErrors] = useState(initialErrors);
  const [loading, setLoading] = useState(false);

  useEffect(() => { handleValidation(false) }, [email, password, touch]);

  const handleValidation = (isSubmit) => {
    try {
      if (isSubmit) {
        setTouch({ email: true, password: true });
      }

      const data = { email, password };
      const options = { abortEarly: false };

      loginSchema.validateSync(data, options);
      setErrors(initialErrors);
    } catch (err) {
      const validationErrors = { ...initialErrors }
      err.inner.forEach(({ path, message }) => {
        if (touch[path]) {
          validationErrors[path] = message;
        }
      });

      setErrors(validationErrors);
    }
  }

  const handleIsValid = () => {
    const data = { email, password };
    const options = { abortEarly: false };

    return loginSchema.isValidSync(data, options);
  }

  const handleChange = (updateField) => (event) => {
    updateField(event.target.value);
  }

  const handleSubmit = () => {
    const isValid = handleIsValid();

    if (isValid) {
      setLoading(true);

      axios({
        method: 'post',
        url: `${process.env.REACT_APP_APOLLO_GRAPHQL_URI}/login`,
        data: { email, password },
      })
      .then((res) => {
        openSnackBar({ message: 'Successfully Login', variant: success });
        Cookies.set('accessToken', res.data);
        history.push('/chat');
      })
      .catch((err) => openSnackBar({ message: err.response.data.message, variant: error }))
      .finally(() => setLoading(false));
    } else {
      handleValidation(true);
    }
  }

  const handleBlur = (event) => {
    setTouch({ ...touch, [event.target.type]: true });
  }

  const isError = (err) => Boolean(errors[err].length);

  return (
    <Grid className={classes.root} container direction="column" alignItems="center">
      <Grid className={classes.row} item md={3}>
        <Typography variant="h3" color="textSecondary">{login.title}</Typography>
      </Grid>
      <Grid className={classes.row} item md={3}>
          <TextField
            className={classes.inputField}
            id="login-email"
            type="email"
            label={login.emailLabel}
            value={email}
            error={isError('email')}
            helperText={errors.email}
            onChange={handleChange(setEmail)}
            onBlur={handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutline color={errors.email.length ? 'error' : 'inherit'} />
                </InputAdornment>
              ),
            }}
          />
      </Grid>
      <Grid className={classes.row} item md={3}>
          <TextField
            className={classes.inputField}
            id="login-password"
            type="password"
            label={login.passwordLabel}
            value={password}
            error={isError('password')}
            helperText={errors.password}
            onChange={handleChange(setPassword)}
            onBlur={handleBlur}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpen color={errors.password.length ? 'error' : 'inherit'} />
                </InputAdornment>
              ),
            }}
          />
      </Grid>
      <Grid className={classes.row} style={{ position: "relative" }} item md={3}>
        <ToolTip title="Login">
          <Fab size="medium" color="secondary" aria-label="login">
            <ArrowForward onClick={handleSubmit} />
          </Fab>
        </ToolTip>
        {loading && <CircularProgress size={55} className={classes.fabProgress} />}
      </Grid>
      <Grid className={classNames(classes.row, classes.pointer)} item md={3}>
        <Typography variant="subtitle2">{login.forgotPassword}</Typography>
      </Grid>
      <Grid className={classNames(classes.row, classes.pointer)} item md={3}>
        <Typography variant="subtitle2">{login.signUp}</Typography>
      </Grid>
    </Grid>
  )
}

export default withSnackBarConsumer(Login);
