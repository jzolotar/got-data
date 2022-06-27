import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  setFiltersOn,
  setGenderFilter,
  setCultureFilter,
} from '../../redux/filterSlice';

const FormFilters = () => {
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
    <section>
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
        <button type='submit'>Apply filters</button>
      </form>
      <button onClick={() => dispatch(setFiltersOn(false))}>
        Remove filters
      </button>
    </section>
  );
};

export default FormFilters;
