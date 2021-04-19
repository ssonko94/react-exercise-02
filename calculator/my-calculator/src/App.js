import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

let isNewSequency = true;

function App() {
  const [sequency, setSequency] = useState("");
  const [answer, setAnswer] = useState("0");

  const handleArithemetic = function (value) {
    let newSquency = "";
    if (isNewSequency) {
      newSquency = value;
      isNewSequency = false;
    } else {
      newSquency = sequency + value;
    }
    setSequency(newSquency);
  };

  const evaluateSequence = () => {
    try {
      // eslint-disable-next-line no-eval
      const answer = eval(sequency);
      setAnswer(answer);
    } catch (e) {
      console.error("Error happened", sequency);
      setAnswer("Mathematical Error");
    } finally {
      isNewSequency = true;
    }
  };

  const allClear = () => {
    setSequency("");
    setAnswer("0");
  };

  const deleteSequence = () => {
    const cutString = sequency.slice(0, -1);
    setSequency(cutString);

    return;
  };

  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        evaluateSequence();
        break;
      case "AC":
        allClear();
        break;
      case "DEL":
        deleteSequence();
        break;
      default:
        handleArithemetic(value);
        break;
    }
  };

  const displaySequence = () => {
    return sequency
      .split("Math.PI/180*")
      .join("")
      .split("Math.")
      .join("")
      .split("-1*")
      .join("±")
      .split("*")
      .join("x")
      .split("/")
      .join("÷")
      .split("sqrt(")
      .join("√(")
      .split("cbrt(")
      .join("∛(")
      .split("xx")
      .join("^");
  };

  return (
    <div className="App">
      <div className="calculator-wrapper">
        <div className="calculator-screen">
          <div data-testid="sequency-screen" className="calculator-screen__sub">
            {displaySequence()}
          </div>
          <div data-testid="answer-screen" className="calculator-screen__main">
            {answer}
          </div>
        </div>
        <div className="calculator-buttons">
          <Button
            onClick={handleButtonClick}
            content="AC"
            type="button-all-clear"
          />
          <Button
            onClick={handleButtonClick}
            content="DEL"
            type="button-clear-one"
          />
          <Button
            onClick={handleButtonClick}
            content="("
            type="button-left-bracket"
          />
          <Button
            onClick={handleButtonClick}
            content=")"
            type="button-right-bracket"
          />
          <Button
            onClick={handleButtonClick}
            content="MOD"
            type="button-operator button-operator__modulo"
            value="%"
          />
          <Button
            onClick={handleButtonClick}
            content="∛"
            type="button-scientific button-scientific__cube-root"
            value="Math.cbrt("
          />
          <Button
            onClick={handleButtonClick}
            content="7"
            type="button-number"
            id="7"
          />
          <Button
            onClick={handleButtonClick}
            content="8"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="9"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="÷"
            type="button-operator button-operator__divide"
            value="/"
          />
          <Button
            onClick={handleButtonClick}
            content={
              <span>
                x<sup>2</sup>
              </span>
            }
            value="**2"
            type="button-scientific button-scientific__squared"
          />
          <Button
            onClick={handleButtonClick}
            content="log"
            value="Math.log("
            type="button-scientific button-scientific__log"
          />
          <Button
            onClick={handleButtonClick}
            content="4"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="5"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="6"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="×"
            type="button-operator button-operator__multiply"
            value="*"
          />
          <Button
            onClick={handleButtonClick}
            content={
              <span>
                x<sup>3</sup>
              </span>
            }
            value="**3"
            type="button-scientific button-scientific__cubed"
          />
          <Button
            onClick={handleButtonClick}
            content="sin"
            value="Math.sin(Math.PI/180*"
            type="button-scientific button-scientific__sin"
          />
          <Button
            onClick={handleButtonClick}
            content="1"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="2"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="3"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="−"
            type="button button-operator button-operator__subtract"
            value="-"
          />
          <Button
            onClick={handleButtonClick}
            content="√"
            type="button-scientific button-scientific__square-root"
            value="Math.sqrt("
          />
          <Button
            onClick={handleButtonClick}
            content="cos"
            value="Math.cos(Math.PI/180*"
            type="button-scientific button-scientific__cos"
          />
          <Button
            onClick={handleButtonClick}
            content="±"
            value="-1*("
            type="button-operator button-operator__plus-minus"
          />
          <Button
            onClick={handleButtonClick}
            content="0"
            type="button-number"
          />
          <Button
            onClick={handleButtonClick}
            content="."
            type="button-decimal"
          />
          <Button
            onClick={handleButtonClick}
            content="+"
            type="button-operator button-operator__add"
          />
          <Button
            onClick={handleButtonClick}
            content="="
            type="button-operator button-operator__equals"
          />
          <Button
            onClick={handleButtonClick}
            content="tan"
            value="Math.tan(Math.PI/180*"
            type="button-scientific button-scientific__tan"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
