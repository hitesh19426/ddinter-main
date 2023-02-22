import { MdDeleteForever } from "react-icons/md";

function DrugItem({ drug, onClick }) {
  return (
    <li className="list-group-item d-flex justify-content-between border-secondary">
      <span className="fw-bold px-3 mr-auto mt-2">{drug.name}</span>
      <button className="btn btn-danger" onClick={() => onClick(drug.id)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default DrugItem;
