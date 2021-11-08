import { FaPencilAlt, FaTimes } from "react-icons/fa";
import "./Data.css";
const Data = ({ task, onDelete, onEdit }) => {
  debugger;
  return (
    <div>
      <div className="name">
        <div>
          <p className="employeeName">
            <span className="textBold">Employee Name:</span> {task.text}
          </p>
          <p className="employeeRole">
            <span className="textBold">Role:</span> {task.day}
          </p>
        </div>
        <div>
          <p>
            <FaTimes onClick={() => onDelete(task.id)} className="delIcon" />
          </p>
          <p>
            <FaPencilAlt onClick={() => onEdit(task.id)} className="editIcon" />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Data;
