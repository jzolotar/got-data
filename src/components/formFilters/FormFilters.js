import { useState } from 'react';

const FormFilters = () => {
  const [culture, setCulture] = useState('');
  const [gender, setGender] = useState('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (culture.trim() === '' || gender === '') {
      alert('please set filters field');
    } else {
      setCulture('');
      setGender('');
      event.target.reset();
      //dispatch action to the store to set filters

      //filtersON
      //gender
      //culture
    }
  };
  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>Gender:</label>
          <select
            onChange={(event) => setGender(event.target.value)}
            name='gender'
            id='gender'
          >
            <option value=''>Select gender...</option>
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
      <button>Remove filters</button>
    </section>
  );
};

export default FormFilters;
