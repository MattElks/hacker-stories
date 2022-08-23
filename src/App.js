import * as React from "react";

const numArr = [1, 2, 3, 4, 5];
const arrList = numArr.map((num) => <li>{num}</li>);

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function List() {
  return (
    <ul>
      {list.map((obj) => {
        return (
          <li key={obj.objectID}>
            <span>
              <a href={obj.url}>Title: {obj.title}</a>
            </span>
            <span>Author: {obj.author}</span>
            <span>Comments: {obj.num_comments}</span>
            <span>Points: {obj.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="input" type="text" />
    </div>
  );
}

function Welcome() {
  return (
    <div>
      <h1>Howdy</h1>
      <p>Welcome to the page</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Welcome />
      <ul>{arrList}</ul>
      <List />
      <List />
      <List />
      <Search />
    </div>
  );
}

export default App;
