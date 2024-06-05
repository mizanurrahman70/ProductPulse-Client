import React, { useState } from "react";
import Swal from "sweetalert2";
import useAllproduct from "../../Hooks/useAllproduct";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const ManageProduct = () => {
  const axiosPublic = useAxiosPublic();
  const [product, refetch] = useAllproduct();
  
  const statusUpdate=(id,status)=>{
   console.log(id,status)
   const newStatus={status }
   console.log(newStatus)
   axiosPublic.patch(`/product/${id}`,newStatus)
   .then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount>0){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
    }
   })



  }
  const featuredHandle=(id,Featured)=>{
   console.log(id,Featured)
   const newFeatured={Featured }
   console.log(newFeatured,id)
   axiosPublic.patch(`/product/feature/${id}`,newFeatured)
   .then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount>0){
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch()
    }
   })



  }
  const deleteHandle = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/product/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product Name</th>
              <th>status</th>
            
              <th>Details</th>
              <th>Mark as featured</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {product.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.product_name}</td>
                <td>
                  <details className="dropdown">
                    <summary className="m-1 btn">{product.status}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <a onClick={()=>statusUpdate(product._id,'Accepet')}>Accepet</a>
                      </li>
                      <li>
                        <a onClick={()=>statusUpdate(product._id,'Reject')}>Reject</a>
                      </li>
                    </ul>
                  </details>
                  
                </td>
                <th>
                  <Link to={`/productdetails/${product._id}`}><button className="btn btn-ghost btn-xs">Details</button></Link>
                  
                </th>
               
                
                <th>
                  <button onClick={()=>featuredHandle(product._id,"Featured")} className="btn btn-ghost btn-xs">{product?.Featured==='Featured'?'Featured' : 'Feature'}</button>
                </th>
                <th>
                  <button
                    onClick={() => deleteHandle(product._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProduct;
