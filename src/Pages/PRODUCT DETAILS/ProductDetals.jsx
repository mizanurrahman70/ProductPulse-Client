import React, { useEffect, useState } from "react";
import { BiFlag, BiUpArrow } from "react-icons/bi";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ReactStarsRating from "react-awesome-stars-rating";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";

import "@smastrom/react-rating/style.css";

const ProductDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const loader = useLoaderData();
  
  const [revews, setRevews] = useState([]);

  const {
    product_name,
    product_img,
    product_owner_name,
    product_owner_img,

    product_ownner_email,
    product_details,
    External_Links,
    status,
    Upvote,
    Downvote,
    product_tags,
    _id,
  } = loader;
  

  const [rating, setRating] = useState(0);

  const reviewsHandle = (e) => {
    e.preventDefault();
    const form = e.target;
    const reviewers_name = form.Reviewer_Name.value;
    const reviewer_image = form.reviewer_image.value;
    const description = form.description.value;
    const productReviewsId = _id;
    const reviews = {
      reviewers_name,
      reviewer_image,
      description,
      rating,
      productReviewsId,
      product_tags,
    };
    
    axiosPublic.post("/revews", reviews).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "revews submited",
          showConfirmButton: false,
          timer: 1500,
        });
        location.reload();
        form.reset();
      }
    });
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };
  useEffect(() => {
    axiosPublic.get(`/revews/${_id}`).then((res) => {
      setRevews(res.data);
      console.log(res.data);
    });
  }, [loader]);
  const reportHandle = (id) => {
    console.log(id);
    const report = { report: "Report" };
    console.log(report);
    axiosPublic.patch(`/products/${id}`, report).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "reported",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleUpvote = async (id) => {
    if (!user?.email) {
      navigate("/login");
      return;
    }

    if (product_ownner_email === user.email) {
      return;
    }

    try {
      const userEmail = { userEmail: user?.email };

      const response = await axiosPublic.patch(
        `/product/upvote/${id}`,
        userEmail
      );

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Upvoted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        location.reload();
      }
    } catch (error) {
      console.error("Error upvoting the product:", error);
    }
  };
  return (
    <>
      <div className=" md:flex bg-zinc-300 rounded-xl gap-5 p-5 w-3/5 mx-auto space-y-5">
        <div>
          <img className="h-32 w-48" src={product_img} alt="" />
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold  mt-2">{product_name}</h1>
          <h1 className="space-x-5 mt-2">
            {product_tags?.map((tag) => (
              <span className="bg-[#25AE7A] p-2 rounded-xl ">{tag}</span>
            ))}
          </h1>
          <p>{product_details}</p>
          <p>
            External Link : <span className="font-bold">{External_Links}</span>
          </p>
          <h1></h1>
          <button
            onClick={() => {
              reportHandle(_id);
            }}
            className="w-32 h-14 bg-[#FF4C4C] rounded-lg flex pt-4 gap-1"
          >
            <h1>
              <BiFlag className="mx-auto text-2xl" />
            </h1>
            <p className="">Report</p>
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleUpvote(_id)}
            className="w-32 h-14 bg-[#FF6600] text-center rounded-lg flex pt-4 mx-auto gap-1"
          >
            <h1>
              <BiUpArrow className="mx-auto text-2xl" />
            </h1>
            <p>Upvote</p>
            <p>{Upvote}</p>
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="w-32 h-14 bg-[#00BFA5] text-center rounded-lg flex pt-4 mx-auto gap-1"
          >
            <h1 className="mx-auto">Reviews</h1>
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
              <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md">
                <h2 className="text-lg font-semibold text-gray-700 capitalize">
                  Reviews
                </h2>
                <form onSubmit={reviewsHandle}>
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                      <label className="text-gray-700" htmlFor="Reviewer_Name">
                        Reviewer Name
                      </label>
                      <input
                        name="Reviewer_Name"
                        defaultValue={user?.displayName}
                        disabled
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                    <div>
                      <label className="text-gray-700" htmlFor="reviewer_image">
                        Reviewer Image
                      </label>
                      <input
                        type="email"
                        name="reviewer_image"
                        defaultValue={user?.photoURL}
                        disabled
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <label className="text-gray-700" htmlFor="description">
                      Description
                    </label>
                    <textarea
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                      name="description"
                      required
                      cols="30"
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <label className="text-gray-700" htmlFor="rating">
                      Rating
                    </label>
                    <ReactStarsRating
                      className="flex"
                      onChange={handleRatingChange}
                      value={rating}
                    />
                  </div>
                  <div className="flex justify-end mt-6">
                    <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                      Save
                    </button>
                    <form method="dialog">
                      <button className="btn ml-5">Close</button>
                    </form>
                  </div>
                </form>
              </section>
            </div>
          </dialog>
        </div>
      </div>
      {/* reting revews  */}
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {revews?.map((revews) => (
            <SwiperSlide>
              <div className="mx-24 space-y-4 my-16 flex flex-col items-center">
              <img className="h-28 rounded-lg" src={revews.reviewer_image} alt="" />
              <h1 className="text-2xl text-center text-orange-500">
                  {revews.reviewers_name}
                </h1>
                <p>{revews.description}</p>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={revews.rating}
                  readOnly
                />
                
               
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductDetails;
