const CharactersDetails = ({ item }) => {
  const { name, alive, gender, culture, allegiances } = item;
  console.log(name);
  return (
    <tr key={Math.random().toString()}>
      <td>{name}</td>
      <td>{alive}</td>
      <td>{gender}</td>
      <td>{culture}</td>
      <td>{allegiances}</td>
    </tr>
  );
};

export default CharactersDetails;
