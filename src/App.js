import React from "react";
import Button from "./components/Button";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App">
        <div className="buttons">
          <Button children={"button"} size="large" color="blue" />
          <Button children={"button"} size="medium" color="blue" />
          <Button children={"button"} size="small" color="blue" />
        </div>

        <div className="buttons">
          <Button children={"button"} size="large" color="gray" />
          <Button children={"button"} size="medium" color="gray" />
          <Button children={"button"} size="small" color="gray" />
        </div>

        <div className="buttons">
          <Button
            children={"button"}
            size="large"
            color="pink"
            outline={true}
            fullWidth={true}
          />
          <Button
            children={"button"}
            size="medium"
            color="pink"
            outline={true}
            fullWidth={true}
          />
          <Button
            children={"button"}
            size="small"
            color="pink"
            outline={true}
            fullWidth={true}
            className="JmKanmo"
            onClick={() => {
              console.log("hello");
            }}
          />
        </div>
      </div>
    </>
  );
}
export default App;
