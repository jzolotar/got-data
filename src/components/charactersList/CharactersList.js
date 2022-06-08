import CharactersDetails from '../charactersDetails/CharactersDetails';

const CharactersList = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Character</th>
            <th>Alive</th>
            <th>Gender</th>
            <th>Culture</th>
            <th>Allegiances</th>
          </tr>
        </thead>
        <tbody>{CharactersDetails}</tbody>
      </table>
    </div>
  );
};

export default CharactersList;
