import React, { Fragment, useState } from "react";
import { employeeData } from "./Employee";
import "./List.css";
import { nanoid } from "nanoid";
import Rowline from "./Rowline";
import Editrow from "./Editrow";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'

const List = () => {
  const [employee, setEmployee] = useState(employeeData);
  const [editrow, setEditrow] = useState(null);
  const navigate=useNavigate();
  const [adddata, setData] = useState({
    Name: "",
    address: "",
    contact: "",
    mail: "",
    salary: "",
  });
  const [editedWorkersId,seteditedworkerId]=useState(null);
  const [search,setSearch]=useState("");
  const [editData, setEditData] = useState({
    Name: "",
    address: "",
    contact: "",
    mail: "",
    salary: "",
  });
  

  const handleEdit = (e, workers) => {
    e.preventDefault();
    setEditrow(workers.id);
    const newValues = {
      Name: workers.Name,
      address: workers.address,
      contact: workers.contact,
      mail: workers.mail,
      salary: workers.salary,
    };
    setEditData(newValues);
  };

  const handleAddform = (e,workers) => {
    e.preventDefault();
    const Alldata = e.target.getAttribute("name");
    const Allvalue = e.target.value;
    const newData = { ...adddata };
    newData[Alldata] = Allvalue;
    setData(newData);
  };


  const handleEditData = (e) => {
    e.preventDefault();
    seteditedworkerId(null)
    const fieldName = e.target.getAttribute("name");
    const fieldvalue = e.target.value;
    const neweditData = { ...editData };
    neweditData[fieldName] = fieldvalue;
    setEditData(neweditData);
  };
  const handleEditSubmit=(e)=>{
    e.preventDefault();
    const editedWorkers={
        id:editedWorkersId,
        Name: editData.Name,
        address: editData.address,
        contact: editData.contact,
        mail: editData.mail,
        salary:editData.salary

    }
    const newWorkers=[...employee]
    const index=employee.findIndex((worker)=>worker.id===editedWorkersId)
    newWorkers[index]=editedWorkers;
    setEmployee(newWorkers);
    seteditedworkerId(null);




  }

  const handlecancel=(e)=>{
    e.preventDefault();
    seteditedworkerId(null);

  }
  const handledelete=(workerId)=>{
    const newContacts=[...employee]
    const index=employee.findIndex((contact)=>contact.id===workerId)
    newContacts.splice(index,1)
    setEmployee(newContacts);
    alert("Employee has been deleted")

  }
  const handleAdd = (e) => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      Name: adddata.Name,
      address: adddata.address,
      contact: adddata.contact,
      mail: adddata.email,
      salary: adddata.salary,
    };
    const newContacts = [...employee, newContact];
    setEmployee(newContacts);
    alert("Emplyoee added sucessfully");
    setData("")
  };

  


  return (
    <div className="contain-table">
      <h3>Employee Mangagement system</h3>
      <input type="text" className="search-icon"placeholder="search.."value={search} onChange={(e)=>setSearch(e.target.value.toLocaleLowerCase())}/>
      
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {employee.filter((workers)=>{
              if(search==""){
                return workers;
              }else if(workers.Name.toLowerCase().includes(search.toLowerCase())){
                return workers;
              }
            }).map((workers) => (
              <Fragment>
                {editrow === workers.id ? (
                  <Editrow editData={editData} handleEditData={handleEditData} handlecancel={handlecancel} />
                ) : (
                  <Rowline workers={workers} handleEdit={handleEdit} handledelete={handledelete} search={search} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h3>Add Contacts</h3>
      <form>
        <input
          type="text"
          name="Name"
          required="required"
          placeholder="Enter name.."
          onChange={handleAddform}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address.."
          onChange={handleAddform}
        />
        <input
          type="text"
          name="contact"
          required="required"
          placeholder="Enter contact.."
          onChange={handleAddform}
        />
        <input
          type="text"
          name="email"
          required="required"
          placeholder="Enter mail.."
          onChange={handleAddform}
        />
        <input
          type="text"
          name="salary"
          required="required"
          placeholder="Enter salary.."
          onChange={handleAddform}
        />
        <button className="btn" onClick={handleAdd}>
          Add
        </button>
      </form>
    </div>
  );
};

export default List;
