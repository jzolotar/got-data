import React from 'react';

const HouseDetails = ({ data }) => {
  return (
    <section>
      <p>Name of the house : {data.name}</p>
      <p>Region : {data.region}</p>
      <p>Coat of arms : {data.coatOfArms}</p>
      <p>Words: {data.words}</p>
      <p>titles: {data.titles}</p>
      <p>seats: {data.seats}</p>
      <p>died out: {data.diedOut ? 'yes' : 'no'}</p>
      <p>overlod: {data.overlord ? 'yes' : 'no'}</p>
      <p>numofCadets: {data.swornMembers.length}</p>
    </section>
  );
};

export default HouseDetails;
