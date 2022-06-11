import CharactersDetails from '../charactersDetails/CharactersDetails';
import { useGetCharactersDataQuery } from '../../redux/apiSlice';

const CharactersList = () => {
  const { data, isLoading, isSuccess, isFetching, isError, error } =
    useGetCharactersDataQuery(1, 25);

  isSuccess && data.map((item) => console.log(item));

  return (
    <div>
      <h1>Character List</h1>
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
        <tbody>
          {isSuccess && data.map((item) => <CharactersDetails item={item} />)}
        </tbody>
      </table>
    </div>
  );
};

export default CharactersList;
