import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => setData(res.data));
  }, []);

  const handlePost = () => {
    axios
      .post("http://localhost:3000/students", {
        name: "Hema",
        fathername: "ramakrishnappa"
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const handlePut = (id) => {
    axios
      .put(`http://localhost:3000/students/${1}`, {
        name: "rrr",
        fathername: "ntr"
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/students/${5}`)
      .then(function (response) {
        console.log(response);
      });
  };
  return (
    <div>
      <div>
        {/* {JSON.stringify(data)} */}
        <h4>Fetch Data</h4>
        {data.map((item) => (
          <div key={item.id}>
            {item.name} {item.fathername}
            {
              <button onClick={() => handleDelete(item.id)}>
                Axios Delete
              </button>
            }
          </div>
        ))}
      </div>
      <button onClick={handlePost}>Axios Post</button> <br /> <br />
      <button onClick={handlePut}>Axios Put</button>
    </div>
  );
};

export default App;
