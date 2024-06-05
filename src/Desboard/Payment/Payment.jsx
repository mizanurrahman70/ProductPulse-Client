import React from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import TitleSection from '../../Components/TitleSection';
const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PUBLIC_KEY);
    return (
        <div>
            <TitleSection heading={'Payment'}></TitleSection>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;