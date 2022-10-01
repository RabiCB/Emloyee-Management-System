import React from "react";

const Editrow = ({ editData, handleEditData,handlecancel}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          name="Name"
          value={editData.Name}
          placeholder="Enter name..."
          onChange={handleEditData}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="address"
          value={editData.address}
          placeholder="Enter address..."
          onChange={handleEditData}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="contact"
          value={editData.contact}
          placeholder="Enter contact..."
          onChange={handleEditData}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="mail"
          value={editData.mail}
          placeholder="Enter mail..."
          onChange={handleEditData}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="salary"
          value={editData.salary}
          placeholder="Enter salary..."
          onChange={handleEditData}
        />
      </td>
      <td>
        <button type="submit" className="btn">
          save
        </button>
        <button type="button" onClick={handlecancel} className="btn">
            cancel
        </button>
      </td>
    </tr>
  );
};

export default Editrow;
