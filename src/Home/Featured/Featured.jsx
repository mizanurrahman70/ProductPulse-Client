import React from "react";
import { BiDownArrow, BiUpArrow, BiUpvote } from "react-icons/bi";
import TitleSection from "../../Components/TitleSection";
import ProductDetals from "../../Pages/PRODUCT DETAILS/ProductDetals";
import useAllproduct from "../../Hooks/useAllproduct";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
const Featured = () => {
  const axiosPublic = useAxiosPublic();
  const [product,refetch] = useAllproduct();
  const { user } = useAuth();
  console.log(product);
  const handleUpvote = async (id) => {
    try {
      const userEmail = { userEmail: user?.email };
      console.log(id,userEmail)
      const response = await axiosPublic.patch(
        `/product/upvote/${id}`,
        userEmail
      );

      if (response.data.modifiedCount > 0) {
      
        console.log("Upvoted successfully!");
        refetch()
      }
    } catch (error) {
      console.error("Error upvoting the product:", error);
    }
  };
  const handleDownvote = async (id) => {
    try {
      const userEmail = { userEmail: user?.email };
      console.log(id,userEmail)
      const response = await axiosPublic.patch(
        `/product/Downvote/${id}`,
        userEmail
      );

      if (response.data.modifiedCount > 0) {
      
        console.log("Upvoted successfully!");
        refetch()
      }
    } catch (error) {
      console.error("Error dwonvoting the product:", error);
    }
  };
  return (
    <>
      <TitleSection
        heading={"Featured"}
        subHeading={"New Tacnology"}
      ></TitleSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {product.map((product) => (
          <>
            <div className="flex bg-zinc-300   rounded-xl gap-5 p-5 justify-around">
              <Link to={`/productdetails/${product._id}`}>
                <div>
                  <div>
                    <img src={product.product_img} alt="" />
                  </div>
                  <div>
                    <h1>{product.product_name}</h1>
                    <h1 className="space-x-5">
                      <span>around</span>
                      <span>
                        world<span>Preview</span>
                      </span>
                    </h1>
                  </div>
                </div>
              </Link>
              <div className="w-14  border-[#FF6600]  text-center">
                <div>
                  <h1 onClick={() => handleUpvote(product._id)}>
                    <BiUpArrow className="mx-auto text-2xl" />
                  </h1>
                  <p>{product.Upvote}</p>
                </div>
                <div>
                  <h1 onClick={()=>handleDownvote(product._id)}>
                    <BiDownArrow className="mx-auto text-2xl" />
                  </h1>
                  <p>{product.Downvote}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Featured;
