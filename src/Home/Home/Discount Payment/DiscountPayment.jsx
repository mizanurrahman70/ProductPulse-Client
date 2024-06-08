import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import TitleSection from "../../../Components/TitleSection";

const DiscountPayment = () => {
  const axiosPublic = useAxiosPublic();

  const [coupons, setCoupon] = useState([]);
  const [couponInput, setCouponInput] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const [isValid,setValid]=useState(false)

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await axiosPublic.get("/coupons");
      setCoupon(response.data);
      
    };

    fetchCoupons();
  }, [axiosPublic]);

  const couponCheck = (inputCoupon) => {
    const validCoupon = coupons.find((coupon) => coupon.couponCode === inputCoupon);
    if (validCoupon) {
      setValidationMessage("Coupon is valid!");
      setValid(true)
      console.log('valid')
    } else {
      setValidationMessage("Invalid coupon code.");
    }
  };

  const handleCouponSubmit = (e) => {
    console.log(e.target.value)
    const couponInput=e.target.value
    couponCheck(couponInput);
  };
console.log(isValid)
  return (
    <>
     <TitleSection heading={"Discount Membership"}></TitleSection>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {coupons?.map((coupon) => (
          <SwiperSlide key={coupon._id}>
            <div className="mx-auto my-20 max-w-[350px] space-y-6 rounded-lg border-b-2 border-l border-r-2 border-t border-b-[#0084ff] border-l-[#005eb6] border-r-[#0084ff] border-t-[#005eb6] bg-white py-8 pl-8 shadow-md dark:bg-[#18181B]">
              <div className="flex items-center justify-between">
                <h1 className="w-[35%] text-2xl font-bold tracking-wider text-sky-900 dark:text-[#289DFF] md:text-4xl">
                  <sup className="text-2xl font-black">$</sup>
                  {coupon?.discount_amount}
                  <sub className="text-sm tracking-tight">/mo</sub>
                </h1>
                <div className="w-[65%] rounded-bl-full rounded-tl-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] px-4 py-4 md:px-10 md:py-5">
                  <h3 className="font-semibold tracking-wider text-white md:text-xl">Copon:{coupon?.couponCode}</h3>
                </div>
              </div>
              <p className="font-semibold text-sky-900 dark:text-[#4BB3FF]/90">{coupon?.description}</p>
              <h1 className="text-green-500">Expire Date {coupon?.expire_date}</h1>
              <div className="relative w-max">
                <input
                  defaultValue={60 - coupon?.discount_amount}
                  disabled
                  className="peer h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20"
                  type="text"
                  id="amount"
                  placeholder=""
                />
                <label
                  className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]"
                  htmlFor="amount"
                >
                  Amount
                </label>
              </div>
              <div className="relative w-max">
                <input
                  defaultValue={coupon?.couponCode}
                 onChange={handleCouponSubmit}
                  className="peer h-[50px] border-b border-[#1B8EF8] bg-blue-100 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20"
                  type="text"
                  id="amount"
                  placeholder=""
                />
                <label
                  className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]"
                  htmlFor="amount"
                >
              Coupon Code
                </label>
              </div>
          
             
              <div className="mr-8">
                {isValid ? (
                 <Link to={`/desboard/Diacount-payment/${coupon?._id}`}>
                 <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">
                   Get Payment
                 </button>
               </Link>
                ) : (
                 
                    <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">
                    Use Coupon
                  </button>
                )}
              </div>
              {/* <div className="mr-8">
                {coupon?.status ? (
                  <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">
                    Verified
                  </button>
                ) : (
                  <Link to={`/desboard/Diacount-payment/${coupon?._id}`}>
                    <button className="w-full rounded-full bg-gradient-to-r from-[#52b7ff] to-[#0084ff] py-4 text-lg font-semibold uppercase tracking-wider text-white">
                      Get Payment
                    </button>
                  </Link>
                )}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DiscountPayment;

