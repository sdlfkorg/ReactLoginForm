import React from "react";
import { Grid } from "@material-ui/core";
import CommonButton from "./CommonButton";
import DividerInput from "./DividerInput";
import CommonInput from "./CommonInput";

type LoginFormProps = {};

type LoginFormState = {
  username: string;
  password: string;
};

class LoginForm extends React.Component<LoginFormProps, LoginFormState> {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  login = () => {
    const { username, password } = this.state;
    console.log("login function is here", username, password);
  };

  handleChange(e, field) {
    console.log("e.target.value", e.target.value, field);
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <>
        <div className={"h-full w-full "}>
          <h1 className={"LoginForm__Title"}>Choose Account Type</h1>

          <h1 className={"LoginForm__contextText"}>Hello doctor!</h1>

          <h1 className={"LoginForm__contextText"}>
            Please fill out the form below to get started
          </h1>
          <div className={"m-4"}>
            <DividerInput
              inputClass={""}
              placeholder={"username"}
              value={username}
              onChange={e => this.handleChange(e, "username")}
            />

            <CommonInput
              className={"mb-4"}
              required
              margin={"dense"}
              variant={"outlined"}
              fullWidth={true}
              name={"member name"}
              // error={accountSettingsStore!.blockFormErrors.name !== null}
              // label={intl.formatMessage({id:"accountSettings.blockUnblock.memberNameIp", defaultMessage:"Membername"})}
              // helperText={accountSettingsStore!.blockFormErrors.name}
              // value={this.state.name}
              // onChange={(e) => this.handleChange('name', e.target.value)}
              value={""}
              onChnage={_ => _}
              // onChange={e => authStore!.updateLoginRegisterInput( "first_name", e.target.value )}
              // onBlur={() => authStore!.validateLoginRegisterInput("first_name")}
            />

            <Grid item>
              <DividerInput
                inputClass={""}
                placeholder={"password"}
                value={password}
                hasDivider={true}
                onChange={e => this.handleChange(e, "password")}
              />
            </Grid>

            <CommonButton
              buttonType={"submit"}
              buttonText={"Login"}
              disabled={false}
              buttonFunction={this.login}
              additionalClass={""}
            />
          </div>
        </div>
      </>
    );
  }
}
export default LoginForm;

// class Sidebar extends Component<SidebarProps, SidebarState> {
