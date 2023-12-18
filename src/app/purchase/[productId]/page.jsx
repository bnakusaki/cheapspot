import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebase";



export default async function PurchasePage () {
    let q = doc(db, "products", 'yiPAt7B4vwCtOdIiGWvN');
    let results = (await getDoc(q)).data();

    return (
        <div className="mx-3">
            <div className="w-full aspect-square bg-gray-300 rounded-lg">
                <div>
                    {/* <Image src={demo} alt="" objectFit="cover" className="h-full w-full rounded-lg " /> */}
                </div>
            </div>
            <div className="mt-5" />
            <h1 className="text-2xl">{results.name}</h1>
            <h2 className="text-2xl font-medium">{`GH₵ ${results.price} per ${results.unit.singular}`}</h2>
            {
                results.quantityInStock > 0?
                <div className="flex">
                        <span class="relative flex h-3 w-3">
                            {
                                results.quantityInStock > 100?
                                <>
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </>
                                    :<>
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </>
                            }
                        </span>
                        <div><span className="font-bold">{results.quantityInStock}</span> {results.quantityInStock > 1? results.unit.plural : results.unit.singular} in stock</div>
                    </div>
                :<p className="text-red-500">Out of stock</p>
            }
            <div className="m-5" />
            <div className="w-full">
                <label>Amount</label>
                <input type="number" min={results.minimumQuantity} max={results.quantityInStock} required autoFocus />
            </div>
            <div className="m-5" />
            <div className="w-full">
                <label>Residence</label>
                <input type="number" min={results.minimumQuantity} max={results.quantityInStock} required autoFocus />
            </div>
            <div className="m-5" />
            <button className="border h-[50px] w-full rounded-lg inline-flex items-center justify-center transition-all duration-100 ease-in-out active:border-gray-300 active:scale-[0.9] hover:border-slate-300 hover:shadow-sm hover:bg-slate-300">
                Buy
            </button>
        </div>
    );
}