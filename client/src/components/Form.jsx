import React from "react";
import { useState } from "react";
import { addUser } from "../api";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate()
  const defaultValue = {
    name : '',
    email : '',
    gender:'',
    status:''
  }
  const [user,setUser] = useState(defaultValue)

  const onValueChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
  };

  const addUserDetails = async()=>{
    await addUser(user)
    navigate('/')
  }
  return (
    <form id="add_user">
      <div className="new_user">
        <div className="form-group">
          <label for="name" className="text-light">
            Name
          </label>
          <input type="hidden" name="id" />
          <input
            type="text"
            name="name"
            placeholder="Mark Stoenis"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group">
          <label for="Email" className="text-light">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@gmail.com"
            onChange={onValueChange}
          />
        </div>
        <div className="form-group">
          <label for="gender" className="text-light">
            Gender
          </label>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-2"
              name="gender"
              value="Male"
              onChange={onValueChange}
            />
            <label for="radio-2" className="radio-label">
              Male
            </label>
          </div>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-3"
              name="gender"
              value="Female"
              onChange={onValueChange}
            />
            <label for="radio-3" className="radio-label">
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label for="gender" className="text-light">
            Status
          </label>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-4"
              name="status"
              value="Active"
              onChange={onValueChange}
            />
            <label for="radio-4" className="radio-label">
              Active
            </label>
          </div>
          <div className="radio inline">
            <input
              type="radio"
              id="radio-5"
              name="status"
              value="Inactive"
              onChange={onValueChange}
            />
            <label for="radio-5" className="radio-label">
              Inactive
            </label>
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn text-dark update" onClick={addUserDetails} 
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
