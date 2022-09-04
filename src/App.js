import { useState } from "react";
import { Users } from "./store/users";
import './App.css';
import Table from './components/Table';

function App() {
  const pages = 10;
  const [query, setQuery] = useState("");
  const [perPage, setPerPage] = useState(pages);
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      {search(Users).length > 0 ?
        <Table data={search(Users).splice(0, perPage)} /> :
        <p>nothing found</p>}
      {search(Users).length > perPage ?
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              setPerPage(perPage + pages)
            }}
          >
            load More
          </button>
        </div>
        : null
      }

    </div>
  );
}

export default App;
