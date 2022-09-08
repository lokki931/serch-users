import { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import Table from './components/Table';

function App() {
  const pages = 10;
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [perPage, setPerPage] = useState(pages);
  const keys = ["first_name", "last_name", "email"];

  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(res => setUsers(res.data))
      .catch(e => console.log(e));
  }, [])


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
      {search(users).length > 0 ?
        <Table data={search(users).splice(0, perPage)} /> :
        <p>nothing found</p>}
      {search(users).length > perPage ?
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
