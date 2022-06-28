import { NavLink } from 'react-router-dom';

const CharactersDetails = ({ item }) => {
  //concat name + alliases and display it with comas,
  let table;
  if (item.name) {
    table = [item.name, ...item.aliases];
  } else {
    table = item.aliases;
  }
  const name = table.join(', ');

  let alive;
  //     Display "Unknown” if both born and died are not provided.
  if (!item.born && !item.died) {
    alive = 'unknown';
    // - Display "No” if born is not provided.
    // of death.
  } else if (item.died) {
    alive = 'no';
  } else if (item.born) {
    // - Display "Yes" when Character has not died.,
    alive = 'yes';
  } else {
    //TODO: add more complex functionality to calculate character's age
    // - Display "No, died at X years old" when Character has died, where X is his age in years at the time -
  }

  const culture = item.culture ? item.culture : 'unknown';

  let allegiances = '';

  if (item.allegiances.length === 0) {
    allegiances = 'No allegiances';
  } else {
    let id = item.allegiances[0].slice(41);
    allegiances = <NavLink to={`/houses/${id}`}>Link</NavLink>;
  }

  return (
    <tr key={Math.random().toString()}>
      <td>{name}</td>
      <td>{alive}</td>
      <td>{item.gender}</td>
      <td>{culture}</td>
      <td>{allegiances}</td>
    </tr>
  );
};

export default CharactersDetails;
