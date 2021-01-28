import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
import BookCard from './BookCard';
import { bookListStyles } from './styles';

export const BookList = ({books}: any)=> {
  const classes = bookListStyles();
  
  return (
    <div className={classes.container}>
      {(books.length !== 0) || <CircularProgress/>}
      {books.map((book: any) => <BookCard data={book} key={book.isbn} />)}
    </div>
  );
};
