import { NavLink, useParams } from 'react-router-dom';
import { useGetHouseDataQuery } from '../redux/apiSlice';
import HouseDetails from '../components/houseDetails/HouseDetails';

const House = () => {
  let { id } = useParams();
  const { data, isFetching, isSuccess } = useGetHouseDataQuery(id, {
    refetchOnMountOrArgChange: true,
  });

  isSuccess && console.log(data);

  return (
    <section>
      {isSuccess && !isFetching && <HouseDetails data={data} />}
      {!isSuccess && isFetching && <p>Loading...</p>}
      <NavLink to='/characters'>BACK</NavLink>
    </section>
  );
};

export default House;
