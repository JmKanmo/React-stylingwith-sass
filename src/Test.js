import React, { useState } from "react";
import Checkbox from "./components/CheckBox";

function Test() {
  const [checked, setCheck] = useState(false);
  const onChange = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <>
      <div>
        <Checkbox onChange={onChange} checked={checked}></Checkbox>
        <strong>다음약관에 동의하시겟습니까</strong>
      </div>
    </>
  );
}
export default Test;
