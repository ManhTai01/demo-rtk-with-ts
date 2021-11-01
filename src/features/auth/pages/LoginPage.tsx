import { Box, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { useDispatch } from "react-redux";
import { authAction } from "../authSlice";

export interface LoginPageProps {}
const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  box: {
    padding: "18px",
  },
}));
export default function LoginPage(props: LoginPageProps) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const handleLoginClick = () => {
    dispatch(
      authAction.login({
        username: "",
        password: "",
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Stdent Management
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" fullWidth onClick={handleLoginClick}>
            Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
