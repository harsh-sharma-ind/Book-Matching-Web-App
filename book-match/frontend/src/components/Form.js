import { useState } from "react";

function Form() {
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = { gender, age };

    console.log(gender, age);

    const response = await fetch(
      "https://book-server-production.up.railway.app/api/books",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setError(json);
      setBook(null);
    }

    if (response.ok) {
      // setGender("Male");
      setAge("");
      setError(null);
      setBook(json);
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-25">
            <label>Age</label>
          </div>
          <div className="col-75">
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label>Gender</label>
          </div>
          <div className="col-75">
            <select id="country" name="country" onChange={(e) => setGender(e.target.value)}>
              <option>Male</option>
              <option>Female</option>
              
            </select>
          </div>
        </div>
        <br/>
        <div className="row">
          <input type="submit" value="Match Book" />
        </div>
      </form>
      <br/>
      {error && <div className="error" style={{color:"red"}}>{error}</div>}

      {book && (
        <div className="jumbotron" style={{color:"#660000"}}>
          <h1 className="display-4">{book}</h1>
        </div>
      )}
    </div>
  );
}

export default Form;
