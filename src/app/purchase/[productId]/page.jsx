import { Col, Row } from 'antd';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../_lib/firebase/firebase";
import PurchaseForm from '../components/purchase-form/purchase-form';



export default async function PurchasePage () {
    // let id = useRouter().query;
    let q = doc(db, "products", 'CgCUHQkzn71gm5fcQsfu');
    let results = (await getDoc(q)).data();

    return (
        <Row>
            <Col span={1} />
            <Col span={22} >
        <div className="md:grid md:grid-cols-2 md:gap-5">
            <div className="w-full aspect-square bg-gray-300 rounded-lg">
                <div>
                    {/* <Image src={demo} alt="" objectFit="cover" className="h-full w-full rounded-lg " /> */}
                </div>
            </div>
            <div className="mt-5 md:hidden" />
            <div>
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

                <PurchaseForm product={results} />
            </div>
        </div>
            </Col>
        <Col span={1} />

        </Row>
    );
}