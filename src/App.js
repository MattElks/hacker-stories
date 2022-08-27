import * as React from "react";

/**
 *        CUSTOM HOOK
 * const useStorageState = (key, initialState) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue];
  };
 * 
 */

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
    localStorage.getItem("search") || "Search a title"
  );

  React.useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const [count, setCount] = React.useState(0);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);

  /* filter stories by search term */
  const filterList = stories.filter((story) =>
    story.title.toLowerCase().match(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <hr />

      <List list={filterList} />
      {count}
      <Button
        id="button1"
        buttonText="Increase count"
        onClick={handleIncrement}
      />
      <Button
        id="button2"
        buttonText="decrease count"
        onClick={handleDecrement}
      />
    </div>
  );
};

const InputWithLabel = ({
  id,
  children,
  type = "text",
  value,
  onInputChange,
}) => {
  return (
    <React.Fragment>
      <label htmlFor={id}>{children}</label>
      <input id={id} type={type} value={value} onChange={onInputChange} />
      <p>
        Searching for: <strong>{value}</strong>
      </p>
    </React.Fragment>
  );
};
/** PRACTICE BTN */
const Button = ({ id, type = "button", buttonText, onClick, ...rest }) => {
  return (
    <React.Fragment>
      <button id={id} type={type} onClick={onClick} {...rest}>
        {buttonText}
      </button>
    </React.Fragment>
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
