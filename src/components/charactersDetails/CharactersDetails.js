const CharactersDetails = (name, alive, item, culture, allegiances) => {
  return (
    <tr key={Math.random().toString()}>
      <td>{name}</td>
      <td>{alive}</td>
      <td>{item.gender}</td>
      <td>{culture}</td>
      <td>{allegiances}</td>
    </tr>
  );
};

export default CharactersDetails;
