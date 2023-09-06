import React, { useState } from "react";

function App() {

  // const [name,setname]= useState("");
  // const [lastname,setlastname]= useState("");
  // const [toSubmit,settoSubmit]=useState("");

  // function handleChange(event){
  //   setname(event.target.value)
  // }
  // function handleChangeLastname(event){
  //   setlastname(event.target.value);
  // }

  // function handleSubmit(event){
  //   settoSubmit(name);
  //   settoSubmit(lastname);

  //   event.preventDefault();
  //   event.preventDefault();
  // }
  const [fullName, setfullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setfullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      };
    });
  };

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form >
        <input onChange={handleChange} name="fName" type="text" placeholder=" Your First Name?" 
        value={fullName.fName} />
        <input onChange={handleChange} name="lName" type="text" placeholder="your last Name"
          value={fullName.lName} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
