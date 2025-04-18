"use client";

import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Loader2Icon } from "lucide-react";
import { db } from "@/utils/DB";
import { UserPurchase } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { UserPricingContext } from "@/app/(context)/UserPricingContext";
import { eq } from "drizzle-orm";
import { init } from "next/dist/compiled/webpack/webpack";

function Pricing() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const { userPriceing, setUserPriceing } = useContext(UserPricingContext);

  useEffect(()=>{
    console.log(userPriceing);
    
  })

  const OnPayment = async () => {
    try {
      setLoading(true); // Start loading when button is clicked

      const resp = await axios.post("/api/create-subscription", {});
      console.log(resp?.data);

      await OnPaymentBoarding(resp?.data?.id); // Wait until Razorpay is done
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false); // Stop loading after everything is done
    }
  };

  const OnPaymentBoarding = async (SubID: string) => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      subscription_id: SubID,
      name: "ABW",
      description: "Monthly Subscription",
      handler: async (resp: any) => {
        console.log("Payment success:", resp);
        if (resp) {
          SavePricing(resp?.razorpay_payment_id , SubID);
          CancelSubscription(resp?.SubID);
        }
      },
    };
    // @ts-ignore

    if (typeof window !== "undefined" && window.Razorpay) {
      // @ts-ignore
      const rzp = new window.Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response: any) {
        alert("Payment failed! Please try again.");
        console.error("Payment failed:", response.error);
      });
    } else {
      alert("Failed to initialize Razorpay. Please refresh and try again.");
    }
  };

  useEffect(() => {
    // @ts-ignore

    if (typeof window !== "undefined" && !window.Razorpay) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => setRazorpayLoaded(true);
      document.body.appendChild(script);
    } else {
      setRazorpayLoaded(true);
    }
  }, []);

  const SavePricing = async (paymentId: string , subID:string) => {
    const result = await db.insert(UserPurchase).values({
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      active: true,
      paymentId: paymentId,
      joinDate: moment().format("DD/MM/YYYY"),
      SubId:subID,
    });
    console.log(result);
    if (result) {
      window.location.reload();
    }
  };

  const OnCancel = async () => {
    CancelSubscription(userPriceing?.SubId);
    console.log(userPriceing?.SubId);
  };


  const getSubscriptionId = async (userEmail: string) => {
    const result = await db.select({
      SubId: UserPurchase.SubId,
      }).from(UserPurchase).where(eq(UserPurchase?.userEmail, userEmail)).limit(1);
    return result?.[0]?.SubId || null;
  };

  const CancelSubscription = async (SubID: string) => {
    try {
      if (user?.primaryEmailAddress?.emailAddress) {
        getSubscriptionId(user.primaryEmailAddress.emailAddress);
      } else {
        console.error("User email address is undefined.");
      }
      console.log("Subscription ID:", SubID);
      setLoading(true);
      
      const response = await axios.post("/api/cancel-subscription", {
        SubId: SubID,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      });

      if (response.data.success) {
        setUserPriceing(false); // Update the context
        window.location.reload();
      } else {
        alert("Failed to cancel the subscription.");
      }
    } catch (err) {
      console.error("Cancel error:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex items-center justify-center mt-5  bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <h2 className="text-5xl text-blue-300 font-bold underline">
          Biiling & Subscprictions
        </h2>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {/* PRO PLAN */}
          <div className="rounded-2xl border border-indigo-600 p-6 shadow-xs ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                Pro Plan
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold bg-white dark:bg-gray-900 text-gray-900 dark:text-white sm:text-4xl">
                  ₹99
                </strong>
                <span className="text-sm font-medium bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                  {" "}
                  /
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">✔️ Unlimited Tokens</li>
              <li className="flex items-center gap-1">✔️ Modify</li>
              <li className="flex items-center gap-1">✔️ 50+ content</li>
              <li className="flex items-center gap-1">✔️ Email support</li>
              <li className="flex items-center gap-1">✔️ Help center access</li>
            </ul>

            <button
              disabled={loading}
              onClick={OnPayment}
              className="mt-8 rounded-full flex gap-2 items-center border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700"
            >
              {loading && <Loader2Icon className="animate-spin" />}
              {/* {loading&&userPriceing? "Processing..." : "Subscribe"} */}
              {userPriceing ? "Active" : "Subscribe"}
            </button>
          </div>

          {/* STARTER PLAN */}
          <div className="rounded-2xl border bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 shadow-xs sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                Current Plan
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold bg-white dark:bg-gray-900 text-gray-900 dark:text-white sm:text-4xl">
                  ₹0
                </strong>
                <span className="text-sm font-medium bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                  {" "}
                  /
                </span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">✔️ 10000 tokens </li>
              <li className="flex items-center gap-1">❌ Not Modify</li>
              <li className="flex items-center gap-1">✔️ 50+ content</li>
              <li className="flex items-center gap-1">❌ Email support</li>
              <li className="flex items-center gap-1">✔️ Help center access</li>
            </ul>
            <button className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600">
              {userPriceing ? "Free" : "Active"}
            </button>
          </div>

          <div>
            {userPriceing && (
              <button
                onClick={OnCancel}
                className="mt-4 rounded-full border border-red-600 bg-red-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-red-700"
              >
                Cancel Plan
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
