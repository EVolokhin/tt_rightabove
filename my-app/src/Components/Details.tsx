import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { detailsStyles } from './styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withRouter } from 'react-router-dom';
import { getCharacters } from './getData'
import { CharactersList } from './CharactersList';

export const Details = withRouter(
  ({ match, books }: any) => {
    let list: any[] = [];
    const classes = detailsStyles();
    const selectedBook = books.find((book: any) => book.isbn === match.params.bookId)
    const [book] = useState(selectedBook);
    const [characters, setCharacters] = useState(list);

    useEffect(()=> {
      (async function () {
        try {
          const charactersList: any[] = await getCharacters(book.povCharacters);

          setCharacters(charactersList);
        } catch (error) {
          alert('Characters Load Error');
        }

      })();
    }, [book.povCharacters])

    const ReleaseDate = new Date(book.released);

    return (
      <div className={classes.container}>
        <div className={classes.navigation}>
          <Link className={classes.link} to="/" >BOOKS LIST</Link>
        </div>
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {book.authors}
            </Typography>
            <Typography variant="h5" component="h2">
              {book.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {`Publisher: ${book.publisher}`}
            </Typography>
            <Typography variant="body2" component="p">
              {`Cover: ${book.mediaType}`}
            </Typography>
            <Typography variant="body2" component="p">
              {`Number of pages: ${book.numberOfPages}`}
            </Typography>
            <Typography variant="body2" component="p">
              {`Released: ${ReleaseDate.toLocaleDateString()}`}
            </Typography>
          </CardContent>
        </Card>
        <div className={classes.container}>
          <p className={classes.titles}>
             characters:
          </p>
          {(characters.length !== 0) || <CircularProgress/>}
          <CharactersList characters={characters}/>
        </div>
      </div>
    );
})