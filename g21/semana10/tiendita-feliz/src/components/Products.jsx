const Products = ({ data }) => {
  console.log(data);
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-6">
      {data.map(element => {
        const { id, title, price, discountPercentage, rating, brand, thumbnail } = element;
        return (
          <li
            key={id}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={thumbnail}
              alt={title}
              width={256}
              height={256}
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-zinc-800">
              <h2 className="text-zinc-400 font-bold">{brand}</h2>
              <h3 className="text-sky-600 text-xl font-extrabold">{title}</h3>
              <span className="text-zinc-400 text-sm font-semibold">{rating}</span>
              <h4><span className="line-through">
                {price.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })}</span> <sup className="py-0.5 px-2 rounded-lg bg-sky-900">-{discountPercentage}%</sup>
              </h4>
              <h5 className="text-sky-600 text-lg font-bold">
                {(price * (100 - discountPercentage) / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })}
              </h5>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;