const FormFilters = () => {
  return (
    <section>
      <form>
        <div>
          <label>Gender:</label>
          <select name='gender' id='gender'>
            <option value=''>Select gender...</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>
        <div>
          <label>Culture:</label>
          <input type='text' placeholder='Braavosi' />
        </div>
        <button type='submit'>Apply filters</button>
      </form>
    </section>
  );
};

export default FormFilters;