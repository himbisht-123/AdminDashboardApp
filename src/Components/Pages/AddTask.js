import React, { useState } from "react";
import "./AddTask.css";
import Swal from "sweetalert2";
const AddTask = ({ onSave }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text && !day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your Employee Name and Role or close the form!",
      });
    } else if (!text && day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your Employee Name!",
      });
    } else if (text && !day) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Fill in your Role!",
      });
    } else {
      onSave({ text, day });
    }
    setText("");
    setDay("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Employee Name</label>
        <input
          type="text"
          placeholder="add Employee Name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Role</label>
        <input
          type="text"
          placeholder="add Role"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save" />
    </form>
  );
};

export default AddTask;
