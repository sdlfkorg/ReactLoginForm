import * as React from "react";
import "./styles.css";
// import Button from "@material-ui/core/Button";
// import CommonButton from "./components/CommonButton";
// import CommonInput from "./components/CommonInput";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <div className="App">
      <LoginForm />

      {/*<CommonButton
        buttonType={"submit"}
        buttonText={"Login"}
        disabled={false}
        buttonFunction={this.login}
        additionalClass={""}
      />
      <CommonInput /> */}
    </div>
  );
}
