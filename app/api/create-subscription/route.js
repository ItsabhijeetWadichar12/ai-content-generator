// api end point for pricing subscriptions 

// api/create-subscription


import Razorpay from "razorpay"
import {NextResponse} from "next/server"

export async function POST(req , resp) {
    
    var instance = new Razorpay({
        key_id:process?.env?.ROZARPAY_KEY_ID,
        key_secret:process?.env?.ROZARPAY_SECRET_KEY
    })

    const result = await instance?.subscriptions?.create({
        plan_id:process?.env?.SUBSCPRIPTION_PLAN_ID,
        customer_notify:1,
        quantity:1,
        total_count:1,
        addons:[],
        notes:{
            key1:"Thanks"
        }
    });

    return NextResponse?.json(result);

}