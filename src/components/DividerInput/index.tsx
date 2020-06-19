import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

type DividerInputProps = {
  inputClass?: string;
  value: string;
  onChange: Function;
  placeholder?: string;
  hasDivider?: boolean;
  endContent?: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center"
      // width: "100%"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

const DividerInput = ({
  inputClass = "",
  placeholder = "",
  value = "",
  onChange = _ => _,
  hasDivider = false,
  endContent
}) => {
  const classes = useStyles();
  const defaultEndContent = endContent ? (
    endContent
  ) : (
    <>
      <Divider className={classes.divider} orientation="vertical" />
      <span className={"DividerInput__tailText p-2"}>Forgot?</span>
    </>
  );

  return (
    <Paper
      variant="outlined"
      elevation={0}
      component="form"
      className={classes.root}
    >
      <LockOutlinedIcon />
      <InputBase
        // className={classes.input}
        // placeholder="Search Google Maps"
        inputProps={{ "aria-label": "search google maps" }}
        className={`CommonInput__input ${inputClass}`}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e)}
      />
      {hasDivider && defaultEndContent}
    </Paper>
  );
};

export default DividerInput;
