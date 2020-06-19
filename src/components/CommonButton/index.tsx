import React from "react";
import { Button } from "@material-ui/core";

type CommonButtonProps = {
  buttonText: string;
  disabled: boolean;
  buttonFunction: Function;
  buttonType: "button" | "submit" | "reset" | undefined;
  additionalClass: string;
};

const CommonButton: React.FunctionComponent<CommonButtonProps> = ({
  buttonText,
  disabled = false,
  buttonFunction,
  buttonType = "contained",
  additionalClass
}) => {
  const onClick = event => {
    event.preventDefault();
    buttonFunction();
  };
  return (
    <Button
      variant="contained"
      color="primary"
      type={buttonType}
      className={`CommonButton class="btn btn-primary" ${additionalClass}`}
      disabled={disabled}
      onClick={onClick}
    >
      {buttonText}
    </Button>
  );
};

export default CommonButton;
