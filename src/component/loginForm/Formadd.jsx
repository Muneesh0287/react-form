import React, { useState } from 'react'

const Formadd = () => {
   const[name, setName]=useState('')
   const[email, setEmail]=useState('')
   const[number, setNumber]=useState('')
   const[password, setPassword]=useState('')
   const[print, setPrint]=useState(false)
   const[list, setList]=useState([])
   const[edit , setEdit]=useState(-1)
   
   



const getdat = (e) => {
  e.preventDefault();
  if (edit === -1) {
    setPrint(true);
    const obj = { name, email, number, password };
    setList([...list, obj]);
  } else {
    const myvar = [...list];
    const mydata = { name, email, number, password };
    myvar[edit] = mydata;
    setList(myvar);
    setEdit(-1);
  }
}


const handleSubmit=()=>{
  setPrint(true);
}
const isDelete=(index)=>{
const updatedata=[...list];
updatedata.splice(index,1)
setList(updatedata)
}
const isEdit = (index) => {
  const selectedData = list[index];
  setName(selectedData.name);
  setEmail(selectedData.email);
  setNumber(selectedData.number);
  setPassword(selectedData.password);
  setEdit(index);
}






  return (
  <>
  <div style={{width:'400px', }} className='container'>
      <div className="container">
        <h3>Login page</h3>
      </div>
    <form 
    onSubmit={getdat}
    >
    <div class="mb-3">
      <label  class="form-label">User Name</label>
      <input type="username"
       class="form-control"
        id="exampleInputEmail1"
        value={name}
        onChange={(e)=>setName(e.target.value)}

        />
        </div>
    <div class="mb-3">
      <label  class="form-label">User Email</label>
      <input type="email"   
       class="form-control"
        id="exampleInputEmail1"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
    <div class="mb-3">
      <label  class="form-label">User Contact Number</label>
      <input type="number"   
       class="form-control"
        id="exampleInputEmail1"
        value={number}
        onChange={(e)=>setNumber(e.target.value)}
        />
        
    </div>
    <div class="mb-3">
      <label  class="form-label">Password</label>
      <input type="password" 
      class="form-control" 
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
    
    <button type="submit" class="btn btn-primary" onClick={handleSubmit}  >Submit</button>
  </form>
  </div>
  
    <div>

       {print && ( 
       <table style={{width:'900px', marginTop:'90px'}} class="container">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope="col">password</th>
    </tr>
  </thead>
{list.map ((i,index)=>(
  <tbody>
    <tr key={index}>
      <td>{i.name}</td>
      <td>{i.email}</td>
      <td>{i.number}</td>
      <td>{i.password}</td>
      <button type="button" className="btn btn-light" onClick={() => isEdit(index)}>Edit</button>

      <button type="button" class="btn btn-light" onClick={()=>isDelete(index)}>Delete</button>
    </tr> 
    </tbody>
  ))}
</table>
)}

    </div>
    </>
  )
}

export default Formadd
