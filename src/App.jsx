import React, { useState } from "react";
import "./App.css";

function App() {
  const [val,setVal]=useState("");
  const [list,setList]=useState([]);
  const [line,cutLine]=useState(true);
  console.log(list);
  console.log(line);

  function update(index){
    const updatedList=list.filter((ele,id)=>{
      return id!=index;
    })
    setList(updatedList);
  }
  return (
   
      <div className="box">
        <h1>Grocery Bud</h1>
        <div className="input">
          <input  value={val} onChange={(e)=>setVal(e.target.value)} className="type" type="text" />
          <button    onClick={()=>{setList([...list,val]), setVal("")}} className="add ">Add Item</button>
        </div>
        {list!=[] && list.map((data,index)=>{
           
         return(
               <div className="activity" key={index}>
                <div className="act">
                <input onClick={()=>cutLine(!line)} type="checkbox" />
                <label key={index}className={line ? "notcut":"cut"}  htmlFor="">{data}</label>
                </div>
               
                <button className="del"  onClick={()=>update(index)}>Delete</button>

               </div>
         )

        })}
      </div>
   
  );
}

export default App;
