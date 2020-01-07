/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Grid, TextField, Typography, Fab, InputAdornment } from '@material-ui/core';
import { MailOutline, LockOpen, ArrowForward } from '@material-ui/icons';
import classNames from 'classnames';

import useStyles from './styles';
import { login } from '../../cms';
import loginSchema from './validations';

const Login = () => {
  const classes = useStyles();
  const initialTouch = { email: false, password: false };
  const initialErrors = { email: '', password: '' };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touch, setTouch] = useState(initialTouch);
  const [errors, setErrors] = useState(initialErrors);

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
    } catch (error) {
      const validationErrors = { ...initialErrors }
      error.inner.forEach(({ path, message }) => {
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
      alert('Everything is alright');
    } else {
      handleValidation(true);
    }
  }

  const handleBlur = (event) => {
    setTouch({ ...touch, [event.target.type]: true });
  }

  return (
    <Grid className={classes.root} container direction="column" alignItems="center">
      <Grid className={classes.row} item md={3}>
        <Typography variant="h3" color="textSecondary">{login.title}</Typography>
      </Grid>
      <Grid className={classes.row} item md={3}>
        <TextField
          className={classes.margin}
          id="login-email"
          type="email"
          label={login.emailLabel}
          value={email}
          error={errors.email.length}
          helperText={errors.email}
          onChange={handleChange(setEmail)}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutline />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid className={classes.row} item md={3}>
        <TextField
          className={classes.margin}
          id="login-password"
          type="password"
          label={login.passwordLabel}
          value={password}
          error={errors.password.length}
          helperText={errors.password}
          onChange={handleChange(setPassword)}
          onBlur={handleBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpen />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid className={classes.row} item md={3}>
        <Fab size="medium" color="secondary" aria-label="login">
          <ArrowForward onClick={handleSubmit} />
        </Fab>
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

export default Login;
