// Basic Forms

import * as React from "react";
import { useRef } from "react";
import { useState } from "react";

// import Counter from "./Counter";
function UsernameForm({ onSubmitUsername }) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // const handleSubmit = function (e) {
  //   e.preventDefault();
  //   const value = e.target.elements[0].value;
  //   onSubmitUsername(value);
  // };
  const [username, setUsername] = useState("");
  const inputValue = useRef(null);
  const handleSubmit = function (e) {
    e.preventDefault();

    onSubmitUsername(inputValue.current.value);
  };

  /* const ErrorContainer = function (props) {
    return <div role="alert">{props.children}</div>;
  }; */

  const handleChange = function (e) {
    const value = e.target.value;
    // const isValid = value === value.toLowerCase();

    setUsername(value.toLowerCase());
    // const button = document.getElementById("button");
    // button.disabled = true;
  };

  // const myInputValue = "ssonko";
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-id">Username:</label>
        <input
          type="text"
          id="input-id"
          ref={inputValue}
          value={username}
          onChange={handleChange}
        />
        {/* errorMessage && <ErrorContainer>{errorMessage}</ErrorContainer> */}
      </div>
      <button type="submit" /* disabled={errorMessage !== null} */ id="button">
        Submit
      </button>
    </form>
  );
}

function App() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

// function App() {
//   return <Counter />;
// }

export default App;
