import Data from "./Data";
import "./ContentData.css";
const ContentData = ({ tasks, onDelete, onEdit }) => {
  debugger;
  return (
    <>
      {tasks.map((task) => (
        <Data key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </>
  );
};
export default ContentData;
