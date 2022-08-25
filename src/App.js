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

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem("search") || "React"
  );

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

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

      <Search
        search={searchTerm}
        onSearch={handleSearch}
        searchTerm={searchTerm}
      />

      <hr />

      <List list={filterList} />
    </div>
  );
};

const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="input" type="text" value={search} onChange={onSearch} />
      <p>
        Searching for: <strong>{search}</strong>
      </p>
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((obj) => (
      <Item key={obj.objectID} person={obj} />
    ))}
  </ul>
);

const Item = ({ person }) => (
  <li>
    <span>
      <a href={person.url}>Title: {person.title}</a>
    </span>
    <span>Author: {person.author}</span>
    <span>Comments: {person.num_comments}</span>
    <span>Points: {person.points}</span>
  </li>
);

export default App;
