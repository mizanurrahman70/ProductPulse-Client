import React, { useEffect, useState } from "react";
import useAllproduct from "../../Hooks/useAllproduct";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";

const AllProduct = () => {
  const [product, refetch, isLoading] = useAllproduct();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get('/product');
        setData(response.data);
   
      } catch (error) {
        console.error( error);
      }
    };
    fetchData();
  }, [axiosPublic]);

  const handleUpvote = async (id) => {
    if (!user?.email) {
      navigate('/login');
      return;
    }
    const findData = product.find((data) => data._id === id);
    if (findData.product_ownner_email === user.email) {
      return;
    }
    try {
      const response = await axiosPublic.patch(`/product/upvote/${id}`, { userEmail: user?.email });
      if (response.data.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.error("Error upvoting the product:", error);
    }
  };

  const handleDownvote = async (id) => {
    if (!user?.email) {
      navigate('/login');
      return;
    }
    const findData = product.find((data) => data._id === id);
    if (findData.product_ownner_email === user.email) {
      return;
    }
    try {
      const response = await axiosPublic.patch(`/product/downvote/${id}`, { userEmail: user?.email });
      if (response.data.modifiedCount > 0) {
        refetch();
      }
    } catch (error) {
      console.error("Error downvoting the product:", error);
    }
  };

  const searchHandle = () => {
    axiosPublic.get(`/search-by-tags?tags=${search}`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error("Error searching products:", error);
      });
  };

  if (isLoading) {
    return (
      <div className="mx-auto w-20 h-20 border-l-2 border-green-500 rounded-full flex justify-center items-center animate-spin">
        <div className="w-16 h-16 border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-spin">
          <div className="w-10 h-10 border-r-2 border-sky-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-[300px] sm:px-2 px-3 mx-3 max-h-[500px] py-20 rounded-t-2xl bg-[#2A3342]">
        <div className="flex justify-center flex-col">
          <div className="bg-[#1F2937] mx-auto max-w-[250px] pr-3 pl-1 py-[6px] rounded-full gap-2 flex items-center text-white">
            <span className="bg-[#22C55E] sm:px-3 px-2 sm:py-1 py-[3px] sm:text-base text-sm rounded-full">New</span>
            Smc product added
          </div>
          <div className="mt-10">
            <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[600px] mx-auto text-center font-extrabold">
              Search by tag
            </h2>
            <div className="mt-5 flex md:flex-row max-w-[450px] mx-auto justify-center gap-2 flex-col">
              <div className="md:ml-auto md:mr-0 lg:w-[55%] relative">
                <svg className="absolute mt-[10px] ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.38 8.06 7.75 8.94.57.11.78-.25.78-.55v-3.06c0-.31-.22-.59-.53-.64C5.61 16.31 4 14.29 4 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.34 0-.67-.04-1-.09-.31-.05-.54-.33-.54-.64v-3.07c0-.3-.21-.66.57-.59 3.43.65 6.18 3.25 6.18 6.49v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-4.57-3.61-8.25-8-8.75z"/>
                </svg>
                <input onChange={(e) => setSearch(e.target.value)} placeholder="Enter tag" className="pr-3 pl-8 rounded-lg w-full py-3" type="text" />
              </div>
              <div className="md:mr-auto md:ml-0 lg:w-[45%]">
                <button onClick={searchHandle} className="bg-[#22C55E] sm:py-3 py-2 sm:text-base text-sm px-18 text-white rounded-lg h-full w-full">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data?.map((product) => (
          <div key={product._id} className="flex bg-zinc-300 rounded-xl gap-5 p-5 justify-around">
            <div>
              <img className="h-32" src={product.product_img} alt={product.product_name} />
            </div>
            <div>
              <div>
                <Link to={`/productdetails/${product._id}`}> 
                  <h1 className="text-2xl font-bold">{product.product_name}</h1>
                </Link>
                <h1 className="space-x-5 mt-5">
                  {product?.product_tags.map((tag, index) => (
                    <span key={index} className="bg-[#25AE7A] p-2 rounded-xl">{tag}</span>
                  ))}
                </h1>
              </div>
            </div>
            <div className="w-14 text-center">
              <div>
                <h1 onClick={() => handleUpvote(product._id)}>
                  <BiUpArrow className="mx-auto text-2xl" />
                </h1>
                <p>{product.Upvote}</p>
              </div>
              <div>
                <h1 onClick={() => handleDownvote(product._id)}>
                  <BiDownArrow className="mx-auto text-2xl" />
                </h1>
                <p>{product.Downvote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProduct;
