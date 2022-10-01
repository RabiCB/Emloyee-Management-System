import React from "react";
import "./Rowline.css";

const Rowline = ({ workers, handleEdit,handledelete}) => {
  return (
    <tr>
      <td>{workers.Name}</td>
      <td>{workers.address}</td>
      <td>{workers.contact}</td>
      <td>{workers.mail}</td>
      <td>{workers.salary}</td>
      <div className="Actions">
        <button className="btn" type="button" onClick={(e)=>handleEdit(e, workers)}>Edit</button>
        <button className="btn" type="button" onClick={()=>handledelete(workers.id)}>Delete</button>
      </div>
    </tr>
  );
};

export default Rowline;
