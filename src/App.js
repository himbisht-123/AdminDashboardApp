import Header from "./Components/Pages/Header";
import ContentData from "./Components/Pages/ContentData";
import AddTask from "./Components/Pages/AddTask";
// Importing React Hooks
import { useState, useEffect } from "react";
// Importing Packages
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
function App() {
  const [loading, setloading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Pre-loader
  console.log(tasks);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3500);
  }, []);
  // Fetching from Local Storage
  const getTasks = JSON.parse(localStorage.getItem("taskAdded"));
  useEffect(() => {
    if (getTasks == null) {
      setTasks([]);
    } else {
      setTasks(getTasks);
    }
  }, []);
  // Add Task
  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully added a new Employee!",
    });
    localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
  };
  // Delete Task
  const deleteTask = (id) => {
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
    Swal.fire({
      icon: "success",
      title: "Oops...",
      text: "You have successfully deleted a Employee!",
    });
    localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
  };
  // Edit Task
  const editTask = (id) => {
    const text = prompt("Employee Name");
    const day = prompt("Role");
    let data = JSON.parse(localStorage.getItem("taskAdded"));
    const myData = data.map((x) => {
      if (x.id === id) {
        return {
          ...x,
          text: text,
          day: day,
          id: uuidv4(),
        };
      }
      return x;
    });
    Swal.fire({
      icon: "success",
      title: "Yay...",
      text: "You have successfully edited an existing role!",
    });
    localStorage.setItem("taskAdded", JSON.stringify(myData));
    window.location.reload();
  };
  function searchEmployee(e) {
    debugger;
    setSearchTerm(e.target.value);
  }
  function setEmployeeData(data) {
    debugger;
    let get = tasks.map((name) => name).filter((text) => text.text);
    for (let i = 0; i < get.length; i++) {
      var getData = [];
      getData.push(get[i].text);
    }
    if (getData.includes(data)) {
      setTasks(get.filter((name) => name.text == data));
    } else {
      setTasks(get);
    }
  }

  return (
    <>
      {loading ? (
        <div className="spinnerContainer">
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <Header
            showForm={() => setShowAddTask(!showAddTask)}
            changeTextAndColor={showAddTask}
          />
          <div className="inputAdminDiv">
            <input
              type="text"
              className="inputSearch"
              placeholder="Search..."
              value={searchTerm}
              onClick={() => setEmployeeData(searchTerm)}
              onChange={(e) => searchEmployee(e)}
            ></input>
          </div>
          {showAddTask && <AddTask onSave={addTask} />}
          <h3>Number of Role: {tasks.length}</h3>
          {tasks.length > 0 ? (
            <ContentData
              tasks={tasks}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          ) : (
            "No Employee Found!"
          )}
        </div>
      )}
    </>
  );
}

export default App;
