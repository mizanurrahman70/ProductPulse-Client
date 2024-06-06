import React, { useState } from 'react';

import { WithContext as ReactTags } from "react-tag-input";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useLoaderData } from 'react-router-dom';

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [KeyCodes.comma, ...KeyCodes.enter];

const ProductUpdate = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const loader=useLoaderData()
    console.log(loader,'lodear data')
    const { product_name,
        product_img,
       
       _id,
      
        product_details,
        External_Links,}=loader
    console.log(loader)
    const [tags, setTags] = useState([{ id: "example", text: "" }]);
  
    const handleDelete = (i) => {
      setTags(tags.filter((tag, index) => index !== i));
    };
  
    const handleAddition = (tag) => {
      setTags([...tags, tag]);
    };
  
    const handleDrag = (tag, currPos, newPos) => {
      const newTags = tags.slice();
      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);
      setTags(newTags);
    };
    const ItemAddHandle = (e) => {
        e.preventDefault();
        const form = e.target;
        const product_name = form.product_name.value;
        const product_img = form.product_img.value;
        const product_ownner_name = form.product_ownner_name.value;
        const product_ownner_img = form.product_ownner_img.value;
        const product_ownner_email = form.product_ownner_email.value;
        const product_details = form.product_details.value;
        const External_Links = form.External_Links.value;
        
        const product_tags = tags.map((tag) => tag.text); // Get the text of each tag
        const status ='panding'
        const Upvote=0
        const Downvote=0
      
        const product = {
          product_name,
          product_img,
          product_ownner_name,
          product_ownner_img,
          product_ownner_email,
          product_details,
          External_Links,
          status,
          Upvote,
          Downvote,
          product_tags, // Add tags to the product object
        };
        axiosPublic.put(`/product/${_id}`, product).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount>0) {
          }
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    
        console.log(product);
      };
    return (
        <div>
            <div>
            <form
          onSubmit={ItemAddHandle}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Product Name*</span>
            </div>
            <input
              type="text"
              placeholder="Product Name"
              name="product_name"
              defaultValue={product_name}
              required
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Product Image*</span>
            </div>
            <input
            defaultValue={product_img}
              type="text"
              name="product_img"
              required
              placeholder="Product Image"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Owner Name *</span>
            </div>
            <input
              type="text"
              name="product_ownner_name"
              disabled
              defaultValue={user?.displayName}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Owner Image*</span>
            </div>
            <input
              type="text"
              placeholder="Owner Image"
              name="product_ownner_img"
              disabled
              defaultValue={user?.photoURL}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Owner Email *</span>
            </div>
            <input
              type="Email"
              placeholder="Owner Email"
              name="product_ownner_email"
              defaultValue={user?.email}
              disabled
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">External Links</span>
            </div>
            <input
              type="text"
              placeholder="External Links"
              defaultValue={External_Links}
              name="External_Links"
              required
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Product Details*</span>
            </div>
            <textarea
              type="text"
              name="product_details"
              required
              placeholder="Product Details*"
              defaultValue={product_details}
              className="textarea textarea-bordered h-44"
            />
          </label>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Tags</span>
            </div>
            <ReactTags
              tags={tags}
              delimiters={delimiters}
              handleDelete={handleDelete}
              handleAddition={handleAddition}
              handleDrag={handleDrag}
              inputFieldPosition="bottom"
              autocomplete
              editable
            />
          </label>
          <button className="btn">Add Item</button>
        </form>
            </div>
        </div>
    );
};

export default ProductUpdate;