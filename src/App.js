import * as React from "react";

const App = () => {
  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  /* filter stories by search term */
  const filterList = stories.filter((story) =>
    story.title.toLowerCase().match(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} searchTerm={searchTerm} />

      <hr />

      <List list={filterList} />
    </div>
  );
};

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="input" type="text" onChange={props.onSearch} />
      <p>
        Searching for: <strong>{props.searchTerm}</strong>
      </p>
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((obj) => (
      <Item key={obj.objectID} obj={obj} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.obj.url}>Title: {props.obj.title}</a>
    </span>
    <span>Author: {props.obj.author}</span>
    <span>Comments: {props.obj.num_comments}</span>
    <span>Points: {props.obj.points}</span>
  </li>
);

export default App;
