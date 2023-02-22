const InteractionRow = ({ ind, interaction }) => {
  const colorMapping = {
    Major: "danger",
    Moderate: "warning",
    Minor: "success",
    Unknown: "light",
  };

  return (
    <tr className={`table-${colorMapping[interaction.Level]}`}>
      <th scope="row">{ind + 1}</th>
      <td>{interaction.Drug_A}</td>
      <td>{interaction.Drug_B}</td>
      <td>{interaction.Level}</td>
    </tr>
  );
};

export default InteractionRow;
