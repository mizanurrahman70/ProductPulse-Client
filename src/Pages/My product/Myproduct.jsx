import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useCards from '../../Hooks/useCards';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Myproduct = () => {
    const {user}=useAuth()
    const [cart,refetch]=useCards()
    const axiosPublic=useAxiosPublic()
    console.log(cart)
    const deleteHandle=(id)=>{
        console.log(id)

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
          <button className="btn btn-ghost btn-xs">details</button>
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