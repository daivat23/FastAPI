import "./App.css";
// import FormComponent from "./component/FormComponent";
import axios from "axios";
import { useState } from "react";

function App() {
  // return <FormComponent />;
  const url = "http://127.0.0.1:8000/employee";
  const [data, setData] = useState({
    id: "",
    name: "",
    salary: ""
  })
  function handle(e) {
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
  }
  function submit(e) {
    e.preventDefault();
    axios.post(url,{
      id: data.id,
      name: data.name,
      salary: data.salary
    })
    .then(res => {
      console.log(res.data);
    })
  }
  const tab = async() => {
    try{
      const res = await axios.get('http://127.0.0.1:8000/');
      let result = res.data;
      console.log(res);
      console.log(result);
    } catch(e) {
      console.log(e);
    }
  }
  return<>
  <button onClick={tab}>Hi</button>
  <form onSubmit={(e) => submit(e)}>
    <legend>name</legend>
    <input onChange={(e) => handle(e)} id="name" value={data.name} type="text"></input>
    <legend>Id</legend>
    <input onChange={(e) => handle(e)} id="id" value={data.id} type="number"></input>
    <legend>salary</legend>
    <input onChange={(e) => handle(e)} id="salary" value={data.salary} type="number"></input>
    <button>add</button>
  </form>
  </>
}

export default App;
