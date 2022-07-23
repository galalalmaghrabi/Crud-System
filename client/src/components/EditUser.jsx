import React, { useEffect } from "react";
import { useState } from "react";
import { editUser,getUser} from "../api";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditUser = () => {

  const navigate = useNavigate()
  const {id} = useParams()
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
    await editUser(user)
    navigate('/')
  }

  useEffect(()=>{
    loadUserDetails()
  },[])
  const loadUserDetails = async()=>{
     const response = await getUser(id)
     setUser(response.data)

  }
  return (
    <main id="site-main">
    <div class="container">
        <div class="box-nav d-flex justify-between">
           <div class="filter">
               <a href="/"><i class="fas fa-angle-double-left"></i> All Users</a>
           </div>
        </div>
        <div class="form-title text-center">
            <h2 class="text-dark">Edit User</h2>
            <span class="text-light">Use the below form to create a new account</span>
        </div>
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
            value={user.name}
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
            value={user.email}
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
    </div>
</main>
  )
}

export default EditUser