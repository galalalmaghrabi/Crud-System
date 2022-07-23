import React, { useState } from "react";
import { useEffect } from "react";
import { getUsers, deleteUser } from "../api";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  let navigate = useNavigate();
  useEffect(() => {
    AllUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const AllUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const delUser = (id) => {
    deleteUser({ id: id });
    navigate("../", { replace: true });
  };
  return (
    <>
      {users.length === 0 ? (
        <div className="error">
          <a href="/add-user" className="border-shadow">
            <span className="text-gradient">
              New User <i className="fas fa-user"></i>
            </span>
          </a>
          <p className="alert alert-danger center">Not Found Users</p>
        </div>
      ) : (
        <div id="site-main">
          <div className="container">
            <div className="box-nav d-flex justify-between">
              <a href="/add-user" className="border-shadow">
                <span className="text-gradient">
                  New User <i className="fas fa-user"></i>
                </span>
              </a>
            </div>

            <form>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>@Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user._id} style={{ height: "50px" }}>
                      <input type="hidden" name="id" value={user._id} />
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.status}</td>
                      <td
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <Link
                          type="submit"
                          className="btn"
                          style={{ margin: "0" }}
                          to={`/${user._id}`}
                        >
                          Edit
                        </Link>

                        <button
                          type="submit"
                          className="btn"
                          style={{ margin: "0" }}
                          onClick={() => delUser(user._id)}
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
