import React, {useState} from "react";
const Crud = () => {

  const [count,setCount] = useState("")

  return (
    <div>
      <h1>Crud Application</h1>
      <form action="#">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstname"  onChange={(e)=>{setCount(e.target.value)}} />
        <p>{count}</p>
      </form>
    </div>
  );
};

export default Crud;
