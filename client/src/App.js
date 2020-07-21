import React,{useState} from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {

  const[myData, setmyData] = useState([])
  function handleSubmit(){
    axios.post("http://localhost:5000/add")
    .then(res => {
        console.log(res.data)
        setmyData(res.data.ops)
        alert("data Added to the Database");
    })
    .catch(err => {
        console.log(err);
    })
  }

  return (
    <div className="App">
    <h2>Click to Enter Student data in Database</h2>
      <Button onClick={() => handleSubmit()} type='submit'>submit</Button>
    <ul>
      {
        myData.map(res => {
        return <li>name ={res.name}, roll_no={res.roll_no},  marks={res.marks}, salary= {res.parents_salary_in_lakh}</li>
        })
      }
    </ul>
    </div>
  );
}

export default App;

