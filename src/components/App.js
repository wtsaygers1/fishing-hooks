import React, { useState, useEffect } from 'react';
import Header from "./Header";
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

function App() {
  let pages = [
    { readableName: "About", url: "about" },
    { readableName: "Photos", url: "photos" },
    { readableName: "Products", url: "products" },
    { readableName: "Reviews", url: "reviews" }
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum)
    window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))
  }

  useEffect(() => {
    let LSPage = window.localStorage.getItem('currentPage')
    if (LSPage !== currentPage) {
      setCurrentPage(JSON.parse(LSPage))
    }
  }, [currentPage])

  return (
    <div className='App container'>
      <Router>
        <Header
          pages={pages}
          currentPage={currentPage}
          setPage={setPage}
        />
      </Router>
    </div>
  )
}

export default App;
