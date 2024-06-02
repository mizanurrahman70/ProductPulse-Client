import React from "react";
import { BiDownArrow, BiUpArrow, BiUpvote } from "react-icons/bi";
import TitleSection from "../../Components/TitleSection";
import ProductDetals from "../../Pages/PRODUCT DETAILS/ProductDetals";
import useAllproduct from "../../Hooks/useAllproduct";
import { Link } from "react-router-dom";
const Featured = () => {
  const [product] = useAllproduct();
  console.log(product);
  return (
    <>
      <TitleSection
        heading={"Featured"}
        subHeading={"New Tacnology"}
      ></TitleSection>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
     {product.map((product) =><Link to={`/productdetails/${product._id}`}><div className="flex bg-zinc-300   rounded-xl gap-5 p-5 justify-around">
          <div>
            <img
              src={product.
                product_img}
              alt=""
            />
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
          <div className="w-14  border-[#FF6600]  text-center">
            <div>
              <h1>
                <BiUpArrow className="mx-auto text-2xl" />
              </h1>
              <p>{product.Upvote}</p>
            </div>
            <div>
              <h1>
                <BiDownArrow className="mx-auto text-2xl" />
              </h1>
              <p>34</p>
            </div>
          </div>
        </div></Link> )}
     </div>
    </>
  );
};

export default Featured;
