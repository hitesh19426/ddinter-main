import InteractionRow from "./InteractionRow";

const InteractionTable = ({ interactionTable }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"> # </th>
          <th scope="col"> Drug 1 </th>
          <th scope="col"> Drug 2 </th>
          <th scope="col"> Level </th>
        </tr>
      </thead>
      <tbody>
        {interactionTable.map((interaction, ind) => (
          <InteractionRow key={ind} ind={ind} interaction={interaction} />
        ))}
      </tbody>
    </table>
  );
};

export default InteractionTable;
