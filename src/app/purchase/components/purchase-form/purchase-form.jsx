'use client'

import { getCurrentUser } from "@/firebase/firebase-auth";
import { useState } from "react";
import { payWithPayStack } from '../../lib/paystack.js';

export default function PurchaseForm ({product}) {
    const [quantity, setQuantity] = useState();

    const user = getCurrentUser();

    return (
        <form onSubmit={()=>{payWithPayStack(user.email, quantity * Number(product.price))}}>
            <div className="w-full">
                    <label>{`Amount (minimum ${product.minimumQuantity})`}</label>
                    <input type="number" min={product.minimumQuantity} max={product.quantityInStock} required autoFocus value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                </div>
                <div className="m-5" />
                <div className="w-full">
                    <label>Location (Where do you want to recieve your order?)</label>
                    {/* <input type="number" min={product.minimumQuantity} max={product.quantityInStock} required autoFocus /> */}
                    <select name="Residence">
                        {/* <option  value="Queens hall">Queens</option>
                        <option value="Republic hall">Republic</option>
                    <option value="Independence hall">Independence hall</option> */}
                        {
                            product.locations.map((location, index)=>{
                                return <option key={index} value={location}>{location}</option>
                            })
                        }
                    </select>
                </div>
                <div className="my-5 border-t-[0.1px]" />
                <div>
                    <span>Total:</span>
                    <span>{` GH₵ ${Number(product.price * quantity)}`}</span>
                </div>
                <div className="my-5" />
                <button className="border h-[50px] w-full rounded-lg inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                    Buy
                </button>
        </form>
    );
}