import { db } from "@/utils/DB";
import { UserPurchase } from "@/utils/schema";
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id:process?.env?.ROZARPAY_KEY_ID,
    key_secret:process?.env?.ROZARPAY_SECRET_KEY
});

export async function POST(req) {
  try {
    const { subscriptionId, userEmail } = await req.json();
    console.log("Cancel subscription request:", { subscriptionId, userEmail });
    // Cancel subscription in Razorpay
    const cancelled = await razorpay?.subscriptions?.cancel(subscriptionId);
    console.log("Razorpay subscription cancelled:", cancelled);

    // Update user record
    await db.update(UserPurchase).set({ active: false }).where(UserPurchase.userEmail.eq(userEmail));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Cancel error:", err);
    return NextResponse.json({ success: false, error: "Failed to cancel" }, { status: 500 });
  }
}
