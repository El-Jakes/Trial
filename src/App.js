import * as math from "mathjs";
import { useState } from "react";
import "./styles.css";
import Button from "./components/Buttons";
import Display from "./components/Display";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function addToInput(val) {
    setInput((input) => [...input, val + ""]);
  }

  function calculate() {
    const value = input.join("");
    setResult(math.evaluate(value));
  }

  function clearInput() {
    setInput("");
    setResult("");
  }

  function backspace() {
    setInput(input.slice(0, input.length - 1));
  }

  return (
    <div className="App">
      <div className="calculator-container">
        <Display input={input} result={result} />
        <div className="row">
          <Button symbol="%" handleClick={addToInput} />
          <Button symbol="CE" handleClick={clearInput} />
          <Button symbol="C" handleClick={clearInput} />
          <Button symbol="⌫" color="red" handleClick={backspace} />
        </div>
        <div className="row">
          <Button symbol="7" handleClick={addToInput} />
          <Button symbol="8" handleClick={addToInput} />
          <Button symbol="9" handleClick={addToInput} />
          <Button symbol="/" color="crimson" handleClick={addToInput} />
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToInput} />
          <Button symbol="5" handleClick={addToInput} />
          <Button symbol="6" handleClick={addToInput} />
          <Button symbol="*" color="crimson" handleClick={addToInput} />
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToInput} />
          <Button symbol="2" handleClick={addToInput} />
          <Button symbol="3" handleClick={addToInput} />
          <Button symbol="-" color="crimson" handleClick={addToInput} />
        </div>
        <div className="row">
          <Button symbol="0" handleClick={addToInput} />
          <Button symbol="." handleClick={addToInput} />
          <Button symbol="=" color="green" handleClick={calculate} />
          <Button symbol="+" color="crimson" handleClick={addToInput} />
        </div>
      </div>
    </div>
  );
}
