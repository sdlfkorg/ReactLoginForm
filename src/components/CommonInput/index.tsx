import React from "react";
import MuiTextField, { TextFieldProps } from "@material-ui/core/TextField";
// import "./styles.scss";

type CustomizedTextFieldProps = {
  size?: "standard" | "small";
};

const CommonInput: React.FunctionComponent<
  TextFieldProps & CustomizedTextFieldProps
> = ({ className, size = "standard", ...props }) => {
  return (
    <MuiTextField
      {...props}
      className={className + ` TextField TextField__${size}`}
    />
  );
};

export default CommonInput;
