import Banner from "@/components/banner/banner";
import Header from "@/components/header/header";
import Product from "@/components/product/product";

export default function HomePage () {
  return (
      <main className="flex flex-col">
        <header>
          <Header />
        </header>
        <div>
          <Banner />
          <h1 className="flex justify-center my-7 text-xl">New Arrivals</h1>
          <div className="px-3 md:px-14 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </main>
  );
}