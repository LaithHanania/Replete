import React from 'react';
import Button from "@material-ui/core/Button";

const LoginButton = () => {
  return (
    <Button color="primary" variant="contained" href="/auth/google">
      Login With Google
    </Button>
  );
};

export default LoginButton;
