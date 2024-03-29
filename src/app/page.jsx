import Banner from "@/app/_components/_banner/banner";
import Header from "@/app/_components/_header/header";
import Product from "@/app/_components/_product/product";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./_lib/firebase/firebase";


export default async function HomePage () {
  let q = doc(db, "mini_products", '4rAfYpxpwp9ocNgZQ7HO');
  let results = await getDoc(q);
  return (
      <main className="flex flex-col mb-10">
        <header>
          <Header />
        </header>
        <div>
          <Banner />
          <h1 className="flex justify-center my-7 text-xl">Deals</h1>
          <div className="px-3 md:px-14 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            {
              results.data().products.map(
                (e, index)=>{
                  return <Product product={e} key={index} />
                }
              )
            }
          </div>
        </div>
      </main>
  );
}
