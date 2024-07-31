import React from "react";

interface LogInProps {
  submit: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const LoginBtn = ({submit}:LogInProps) => {
  return (
    <div className="btn__cont">
      <button type="submit" className="login__btn" onClick={(e) => submit(e)}>
        Log in
      </button>
    </div>
  );
};

export default LoginBtn;
