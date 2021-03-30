// useEffect: persistent state

import * as React from "react";

function useLocalStorageState(key, { initialName = "" }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const someExpensiveComputation = function () {
    return window.localStorage.getItem("name") || initialName;
  };
  const [name, setName] = React.useState(() => someExpensiveComputation());

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  React.useEffect(() => {
    setName(window.localStorage.setItem("name", name));
  }, [name]);

  return [key, setName];
}

function Greeting({ initialName = "" }) {
  const [key, setKey] = React.useState("name");
  const [name, setName] = useLocalStorageState(key, initialName);

  function handleClick() {
    if (key === "name") {
      setKey("firstName");
    } else if (key === "firstName") {
      setKey("Name");
    } else {
      setKey("name");
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <form>
        <button onClick={handleClick} type="button">
          Change key
        </button>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : "Please type your name"}
    </div>
  );
}

function App() {
  return <Greeting initialName="" />;
}

export default App;
