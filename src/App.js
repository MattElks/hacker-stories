import * as React from "react";

const title = "Hello new world";

const welcome = {
  name: "Matt",
  message: "Howdy, ",
};

const numArr = [1, 2, 3, 4, 5];
const arrList = numArr.map((num) => <li>{num}</li>);

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>{getTitle(title)}</h1>
      <p>{welcome.message + welcome.name}</p>
      <ul>{arrList}</ul>
      <label htmlFor="search">Search: </label>
      <input id="input" type="text" />
    </div>
  );
}

export default App;
