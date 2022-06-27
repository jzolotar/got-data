import CharactersDetails from '../charactersDetails/CharactersDetails';
import { useGetCharactersDataQuery } from '../../redux/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  goToFirstPage,
  goToLastPage,
  setPageSize,
} from '../../redux/settingsSlice';
import FormFilters from '../formFilters/FormFilters';

const CharactersList = () => {
  const dispatch = useDispatch();
  //pagination info
  const page = useSelector((state) => state.settings.page);
  const lastPage = useSelector((state) => state.settings.lastPage);
  const pageSize = useSelector((state) => state.settings.pageSize);

  //filtes info
  const isFilterOn = useSelector((state) => state.filters.filtersOn);
  const genderFilter = useSelector((state) => state.filters.gender);
  const cultureFilter = useSelector((state) => state.filters.culture);

  const { data, isSuccess, isFetching } = useGetCharactersDataQuery(
    {
      page,
      pageSize,
    },
    { refetchOnMountOrArgChange: true }
  );

  let filteredData;
  if (isFilterOn) {
    filteredData = data.filter(
      (item) =>
        (item.gender === genderFilter) & (item.culture === cultureFilter)
    );
  } else {
    filteredData = data;
  }

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
            filteredData.map((item, index) => (
              <CharactersDetails key={index} item={item} />
            ))}
          {isFetching && <p>Loading...</p>}
        </tbody>
      </table>
      <section>
        <button
          onClick={() => {
            dispatch(goToFirstPage());
          }}
        >
          First Page
        </button>
        <button onClick={onNextClickHandler}>next</button>
        <button onClick={onPrevClickHandler}>prev</button>
        <button
          onClick={() => {
            dispatch(goToLastPage());
          }}
        >
          Last Page
        </button>
        <div>
          <label>displayed items</label>
          <select
            value={pageSize}
            onChange={(event) =>
              dispatch(setPageSize(Number(event.target.value)))
            }
          >
            <option value='10'>10</option>
            <option value='25'>25</option>
            <option value='50'>50</option>
          </select>
        </div>
      </section>
      <FormFilters />
    </div>
  );
};

export default CharactersList;
