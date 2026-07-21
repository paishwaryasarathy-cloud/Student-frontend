import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

function UpdateStudent(){

const{id}=useParams();

const navigate=useNavigate();

const[data,setData]=useState({

name:"",
age:"",
course:""

});

useEffect(()=>{

axios.get("http://localhost:3000/student/"+id)

.then((res)=>{

setData(res.data);

});

},[id]);

const change=(e)=>{

setData({

...data,

[e.target.name]:e.target.value

});

};

const update=()=>{

if(data.name===""){

alert("Enter Name");
return;

}

if(data.age===""){

alert("Enter Age");
return;

}

if(data.course===""){

alert("Enter Course");
return;

}

axios.put("http://localhost:3000/student/"+id,data)

.then(()=>{

alert("Updated");

navigate("/view");

});

};

return(

<center>

<h2>Update Student</h2>

<input

name="name"

value={data.name}

onChange={change}

/>

<br/><br/>

<input

name="age"

value={data.age}

onChange={change}

/>

<br/><br/>

<input

name="course"

value={data.course}

onChange={change}

/>

<br/><br/>

<button onClick={update}>

Update

</button>

</center>

);

}

export default UpdateStudent;