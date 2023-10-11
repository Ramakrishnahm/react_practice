import { useState, useEffect } from "react";
import axios from "axios";

const Post = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((res) => res.json())
      .then((json) => setValues(json));
    console.log(values);
  }, []);

  const handlePost = () => {
    axios
      .post("http://localhost:3000/students", {
        name: "Fred",
        fathername: "Flintstone",
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/students${1}`)
      .then(function (response) {
        console.log(response);
      });
  };

  const handlePut = (id) => {
    axios
      .put(`http://localhost:3000/students${3}`, {
        name: "rohit",
        fathername: "rahul",
      })
      .then(function (response) {
        console.log(response);
      });
  };
  const handlePatch = (id) => {
    axios
      .patch(`http://localhost:3000/students${5}`, {
        name: "root",
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <div>
        {values.map((value) => (
          <div key={value.id}>
            {value.title} {value.author}{" "}
            {
              <button onClick={() => handleDelete(value.id)}>
                Axios Delete
              </button>
            }
          </div>
        ))}
      </div>

      <button onClick={handlePost}>Axios Post</button>
      <button onClick={handlePatch}>Axios Patch</button>
      <button onClick={handlePut}>Axios Put</button>
    </div>
  );
};

export default Post;
