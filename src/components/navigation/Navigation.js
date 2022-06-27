import { useDispatch } from 'react-redux';
import {
  goToFirstPage,
  goToLastPage,
  setPageSize,
} from '../../redux/settingsSlice';

const Navigation = ({ onNextClickHandler, onPrevClickHandler, pageSize }) => {
  const dispatch = useDispatch();
  return (
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
  );
};

export default Navigation;
