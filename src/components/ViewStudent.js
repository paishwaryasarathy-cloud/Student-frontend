import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

function ViewStudent(){

const[list,setList]=useState([]);

const load=()=>{

axios.get("http://localhost:3000/student")

.then((res)=>{

setList(res.data);

});

};

useEffect(()=>{

load();

},[]);

const del=(id)=>{

axios.delete("http://localhost:3000/student/"+id)

.then(()=>{

alert("Deleted");

load();

});

};

return(

<div>

<h2>Students</h2>

<table border="1" cellPadding="10">

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Age</th>

<th>Course</th>

<th>Edit</th>

<th>Delete</th>

</tr>

</thead>

<tbody>

{

list.map((item)=>(

<tr key={item.stdId}>

<td>{item.stdId}</td>

<td>{item.name}</td>

<td>{item.age}</td>

<td>{item.course}</td>

<td>

<Link to={"/update/"+item.stdId}>

Edit

</Link>

</td>

<td>

<button

onClick={()=>del(item.stdId)}

>

Delete

</button>

</td>

</tr>

))

}

</tbody>

</table>

</div>

);

}

export default ViewStudent;