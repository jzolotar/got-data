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
      <h1>House Details</h1>
      <NavLink to='/characters'>BACK TO CHAR LIST</NavLink>
      {isSuccess && !isFetching && <HouseDetails data={data} id={id} />}
      {!isSuccess && isFetching && <p>Loading...</p>}
    </section>
  );
};

export default House;
