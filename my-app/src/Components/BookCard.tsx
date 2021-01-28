import React from 'react';
import { Link } from 'react-router-dom';
import { bookCardStyles } from './styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default function BookCard({ data }: any) {
  const classes = bookCardStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.authors}
        </Typography>
        <Typography variant="h5" component="h2">
          {data.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link className={classes.info} to={`/info/${data.isbn}`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
