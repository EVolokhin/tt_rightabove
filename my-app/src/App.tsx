import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import { BOOKS, getData } from './Components/getData';
import { BookList } from './Components/BooksList'
import { Details } from './Components/Details';
import './App.css';

function App() {
  let arrayBooks: object[] = [];
  const [bookList, setBookList] = useState(arrayBooks);

  useEffect(() => {
    (async function () {
      try {
        const list: object[] = await getData(BOOKS);
        setBookList(list);
      } catch (error) {
        alert('Books Load Error');
      }
    })();
  }, []);

  return (
    <>
      <div>
        <Switch>
          <Route path="/info/:bookId">
            <Details books={bookList} />
          </Route>
          <Route path="/">
            <BookList books={bookList} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
