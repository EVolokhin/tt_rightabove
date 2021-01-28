import { detailsStyles } from './styles';

export const CharactersList = ({characters}: any) => {
  const classes = detailsStyles();

  return (
    <div className={classes.characters}>
      {characters.map((person: any, index: number) => {
        return (
          <div className={classes.person} key={person.name+index}>
            <p>{`Name: ${person.name}`}</p>
            <p>{`Born: ${person.born}`}</p>
          </div>
        );
      })}
    </div>
  )
};