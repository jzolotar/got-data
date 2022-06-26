import { NavLink, useParams } from 'react-router-dom';
import {
  useGetHouseDataQuery,
  useGetCharactersDataQuery,
} from '../redux/apiSlice';
import HouseDetails from '../components/HouseDetails/HouseDetails';

const House = () => {
  let { id } = useParams();
  const { data, isFetching, isSuccess } = useGetHouseDataQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  isSuccess && console.log(data);

  return (
    <div>
      <h1>House Details {id}</h1>
      {isSuccess && !isFetching && <HouseDetails data={data} />}
      {!isSuccess && isFetching && <p>Loading...</p>}
      <NavLink to='/characters'>BACK</NavLink>
    </div>
  );
};

export default House;
