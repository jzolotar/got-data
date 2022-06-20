import CharactersDetails from '../charactersDetails/CharactersDetails';
import { useGetCharactersDataQuery } from '../../redux/apiSlice';
import { useSelector, useDispatch } from 'react-redux';

const CharactersList = () => {
  const { data, isLoading, isSuccess, isFetching, isError, error } =
    useGetCharactersDataQuery(1, 25);

  isSuccess && data.map((item) => console.log(item));

  const onClickHandler = () => {};

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
      <section>
        <button>next</button>
        <button>prev</button>
        <select name='gender' id='gender'>
          <option value=''>Select gender...</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>
      </section>
    </div>
  );
};

export default CharactersList;
