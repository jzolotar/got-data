import CharactersDetails from '../charactersDetails/CharactersDetails';
import { useGetCharactersDataQuery } from '../../redux/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/settingsSlice';
import FormFilters from '../formFilters/FormFilters';

const CharactersList = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.settings.page);
  const lastPage = useSelector((state) => state.settings.lastPage);
  const pageSize = useSelector((state) => state.settings.pageSize);

  console.log(page, pageSize);
  const { data, isLoading, isSuccess, isFetching, isError, error } =
    useGetCharactersDataQuery(
      {
        page,
        pageSize,
      },
      { refetchOnMountOrArgChange: true }
    );

  isSuccess && data.map((item) => console.log(item));

  const onNextClickHandler = () => {
    dispatch(increment());
  };
  const onPrevClickHandler = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>
        Character List
        <div>
          {page}/{lastPage}
        </div>
      </h1>
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
          {isSuccess &&
            !isFetching &&
            data.map((item) => <CharactersDetails item={item} />)}
          {isFetching && <p>Loading...</p>}
        </tbody>
      </table>
      <section>
        <button onClick={onNextClickHandler}>next</button>
        <button onClick={onPrevClickHandler}>prev</button>
      </section>
      <FormFilters />
    </div>
  );
};

export default CharactersList;
