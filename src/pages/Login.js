import React, { useState } from "react";
import ClassNames from "classnames";

const FieldRenderer = (props) => {
  const [inputVal, setInputVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const inputClass = ClassNames({
    label: true,
    focused: isFocused,
  });
  return (
    <div className="field">
      <span className={inputClass}>{props.label}</span>
      <input
        onChange={(e) => setInputVal(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

const Login = () => {
  return (
    <div className="login">
      <FieldRenderer label="Нэвтрэх нэр:" />
      <FieldRenderer label="Нууц үг:" />
      <button>Нэвтрэх</button>
    </div>
  );
};

export default Login;
