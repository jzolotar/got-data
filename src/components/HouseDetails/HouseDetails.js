import { StyledHouseDetails } from './StyledHouseDetails';

const HouseDetails = ({ data, id }) => {
  return (
    <StyledHouseDetails>
      <h1>House {id}</h1>
      <p>
        Name of the house : <span>{data.name}</span>
      </p>
      <p>
        Region : <span>{data.region}</span>
      </p>
      <p>
        Coat of arms : <span>{data.coatOfArms}</span>
      </p>
      <p>
        Words: <span>{data.words}</span>
      </p>
      <p>
        titles: <span>{data.titles.join(', ')}</span>
      </p>
      <p>
        seats: <span>{data.seats}</span>
      </p>
      <p>
        died out: <span>{data.diedOut ? 'yes' : 'no'}</span>
      </p>
      <p>
        overlod: <span>{data.overlord ? 'yes' : 'no'}</span>
      </p>
      <p>
        numofCadets: <span>{data.swornMembers.length}</span>
      </p>
    </StyledHouseDetails>
  );
};

export default HouseDetails;
