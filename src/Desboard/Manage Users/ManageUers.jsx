import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ManageUers = () => {
  const axiosPublic = useAxiosPublic();

  const [users, setUsers] = useState([]);
  
  useEffect(()=>{
    axiosPublic.get("/users").then((res) => {
    
      setUsers(res.data)
    });

  },[axiosPublic])
  const AdminStatus = (id, status) => {
    console.log(id, status);
    const newStatus = { status };
    console.log(newStatus);
    axiosPublic.patch(`/users/${id}`, newStatus).then((res) => {
      console.log(res.data);
      setUsers(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        location.reload()
      }
    });
  };
  console.log(users)
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>User Name</th>
              <th>User Email</th>

              <th>User Photo</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.userName}</td>
                <td>{user.user_email}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user.user_photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <details className="dropdown">
                    <summary className="m-1 btn">{user.role}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a onClick={()=>AdminStatus(user._id,'Moderator')}>
                          Modaretor
                        </a>
                      </li>
                      <li>
                        <a onClick={()=>AdminStatus(user._id,'Admin')}>
                          Admin
                        </a>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageUers;
