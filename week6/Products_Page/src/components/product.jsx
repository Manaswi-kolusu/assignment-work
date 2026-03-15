function Product({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>

        <p className="text-sm text-gray-500">{product.brand}</p>

        <p className="text-sm text-gray-600 ">
          {product.description}
        </p>

        <p className="text-blue-600 font-semibold text-lg">
          Rs {product.price}
        </p>
      </div>

    </div>
  );
}

export default Product;