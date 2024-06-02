import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useCards from '../../Hooks/useCards';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Myproduct = () => {
    const {user}=useAuth()
    const [cart,refetch]=useCards()
    const axiosPublic=useAxiosPublic()
    console.log(cart)
    const deleteHandle=(id)=>{
        console.log(id)
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
                axiosPublic.delete(`/product/${id}`)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch()
                    }
                   
                })
            
            }
          });

    }
    return (
       <>
       <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
       Serial
        </th>
        <th>Product Name</th>
        <th>status</th>
        <th>Upvote</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        cart.map((product,index)=> <tr key={product._id}>
        <th>
      {index+1}
        </th>
        <td>
         {product.product_name}
        </td>
        <td>
         {product.status}
        </td>
        <td>{product?.Upvote || 0}</td>
        <th>
            <Link to={`/desboard/product_update/${product._id}`}> <button className="btn btn-ghost btn-xs">details</button></Link>
         
        </th>
        <th>
          <button onClick={()=>deleteHandle(product._id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>)
     }
     
    </tbody>
   
    
  </table>
</div>
       </>
    );
};

export default Myproduct;