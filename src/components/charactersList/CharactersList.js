import CharactersDetails from '../charactersDetails/CharactersDetails';
import { useGetCharactersDataQuery } from '../../redux/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/settingsSlice';
import FormFilters from '../formFilters/FormFilters';
import Navigation from '../navigation/Navigation';
import { StyledCharacterList } from './StyledCharacterList';

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
    if (genderFilter !== 'Any') {
      filteredData = data.filter(
        (item) =>
          (item.gender === genderFilter) & (item.culture === cultureFilter)
      );
    } else {
      filteredData = data.filter((item) => item.culture === cultureFilter);
    }
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
    <StyledCharacterList>
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
      <Navigation
        onNextClickHandler={onNextClickHandler}
        onPrevClickHandler={onPrevClickHandler}
        pageSize={pageSize}
      />
      <FormFilters genderFilter={genderFilter} isFilterOn={isFilterOn} />
    </StyledCharacterList>
  );
};

export default CharactersList;
