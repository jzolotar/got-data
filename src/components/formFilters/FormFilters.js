import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setFiltersOn,
  setGenderFilter,
  setCultureFilter,
} from '../../redux/filterSlice';
import { StyledFormFilters } from './StyledFormFilters';

const FormFilters = ({ isFilterOn }) => {
  const dispatch = useDispatch();
  const [culture, setCulture] = useState('');
  const [gender, setGender] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (culture.trim() === '' || gender === '') {
      alert('please set filters field');
    } else {
      //dispatch actions
      dispatch(setFiltersOn(true));
      dispatch(setGenderFilter(gender));
      dispatch(setCultureFilter(culture));

      //reset data holders and form
      setCulture('');
      setGender('');
      event.target.reset();
    }
  };
  return (
    <StyledFormFilters>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Gender:</label>
          <select
            defaultValue={'default'}
            onChange={(event) => dispatch(setGenderFilter(event.target.value))}
            name='gender'
            id='gender'
          >
            <option value='default' disabled>
              Select gender
            </option>
            <option value='Any'>Any</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>
        <div>
          <label>Culture:</label>
          <input
            onChange={(event) => setCulture(event.target.value)}
            type='text'
            placeholder='Braavosi'
            value={culture ?? ''}
          />
        </div>
        <div>
          <button type='submit'>Apply filters</button>
          <button
            disabled={!isFilterOn}
            onClick={() => dispatch(setFiltersOn(false))}
          >
            Remove filters
          </button>
        </div>
      </form>
    </StyledFormFilters>
  );
};

export default FormFilters;
