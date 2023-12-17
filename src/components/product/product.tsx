
function Product () {
    return (
        <div className="pb-1 hover:p-1 hover:border hover:rounded-lg hover:shadow-sm transition-all duration-300 ease-in-out">
            <div className="active:scale-[90%] transition-all duration-300 ease-in-out">
                <div className="w-full aspect-[366/455] bg-gray-300 rounded-lg">
                    <div>
                        {/* <Image src={demo} alt="" objectFit="cover" className="h-full w-full rounded-lg " /> */}
                    </div>
                </div>
                <div className="my-3" />
                <div>
                    <h4 className="text-sm font-normal">Product name</h4>
                    <h5 className="leading-4">Product price</h5>
                </div>
            </div>
        </div>
    );
}

export default Product;