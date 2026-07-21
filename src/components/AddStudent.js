import React, { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [data, setData] = useState({
    name: "",
    age: "",
    course: "",
  });

  const change = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    if (data.name === "") {
      alert("Enter Name");
      return;
    }

    if (data.age === "") {
      alert("Enter Age");
      return;
    }

    if (data.course === "") {
      alert("Enter Course");
      return;
    }

   axios.post("http://localhost:3000/student", {
  name: data.name,
  age: Number(data.age),
  course: data.course
})
.then((res) => {
  alert("Student Added");
})
.catch((err) => {
  console.log(err.response?.data);
})
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        console.log(error.response?.data);

        alert(
          error.response?.data?.message ||
            "Error while adding student"
        );
      });
  };

  return (
    <center>
      <h2>Add Student</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={change}
      />

      <br />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={data.age}
        onChange={change}
      />

      <br />
      <br />

      <input
        type="text"
        name="course"
        placeholder="Course"
        value={data.course}
        onChange={change}
      />

      <br />
      <br />

      <button onClick={submit}>Save</button>
    </center>
  );
}

export default AddStudent;