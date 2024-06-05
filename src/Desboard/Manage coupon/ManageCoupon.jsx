import React from "react";
import { Link } from "react-router-dom";
import useCoupons from "../../Hooks/useCoupons";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ManageCoupon = () => {
  const [coupons, refetch] = useCoupons();
  const axiosPublic=useAxiosPublic()
  console.log(coupons);
  const coauponDelete=(id)=>{
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/coupons/${id}`)
        .then(res=>{
          if(res.data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }

        })
       
      }
    });
  }
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Coupon Code</th>
             
              <th>Edit</th>
              
              <th>Deleted</th>
              <Link to="/desboard/coupon">
                {" "}
                <th className="bg-green-400 text-gray-600 text-xl w-24">
                  Add Coupon
                </th>
              </Link>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                coupons.map((coupon,index)=> <tr>
                <th>{index+1}</th>
                <td>{coupon.couponCode}</td>
               
                <Link to={`/desboard/coupon-update/${coupon._id}`}> <td>Edit </td></Link>
                <td onClick={()=>coauponDelete(coupon._id)}>Delete</td>
              </tr>)
            }
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageCoupon;
