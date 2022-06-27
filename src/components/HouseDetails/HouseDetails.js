import { StyledHouseDetails } from './StyledHouseDetails';

const HouseDetails = ({ data }) => {
  return (
    <StyledHouseDetails>
      <h1>House Details</h1>
      <p>Name of the house : {data.name}</p>
      <p>Region : {data.region}</p>
      <p>Coat of arms : {data.coatOfArms}</p>
      <p>Words: {data.words}</p>
      <p>titles: {data.titles}</p>
      <p>seats: {data.seats}</p>
      <p>died out: {data.diedOut ? 'yes' : 'no'}</p>
      <p>overlod: {data.overlord ? 'yes' : 'no'}</p>
      <p>numofCadets: {data.swornMembers.length}</p>
    </StyledHouseDetails>
  );
};

export default HouseDetails;
