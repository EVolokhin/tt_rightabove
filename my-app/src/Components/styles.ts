import { makeStyles } from '@material-ui/core/styles';

export const bookListStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#faebd7',
  },
});

export const bookCardStyles = makeStyles({
  root: {
    minWidth: 375,
    height: 200,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  info: {
    textDecoration: 'none',
    color: 'black'
  }, 
});

export const detailsStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    alignItems: 'center',
    background: '#faebd7',
  },
  root: {
    minWidth: 300,
    margin: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  titles: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  navigation: {
    display: 'flex',
    padding: 20,
    justifyContent: 'center',
    background: '#faebd7',
  },
  link: {
    'margin-right': '20px',
  },
  characters: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  person: {
    width: 250,
    margin: 5,
    backgroundColor: 'white',
    padding: 10,
    border: '1px solid grey',
    'border-radius': '5px',
  },
});
