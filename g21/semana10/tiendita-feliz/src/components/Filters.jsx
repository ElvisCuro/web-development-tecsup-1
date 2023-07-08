import { useState } from "react";

const Filters = ({ setFilters, categories }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [category, setCategory] = useState('all');

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }));
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="flex items-center gap-2">
        <label htmlFor="price">A partir de: </label>
        <input
          type="range"
          name="price"
          min={0}
          max={1500}
          onChange={handleMinPriceChange}
          value={minPrice}
        />
        <span>$ {minPrice}</span>
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="category">Categoría: </label>
        <select
          name="category"
          className="border rounded-lg bg-zinc-900"
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="all">Todos</option>
          {categories.map((element, index) => (
            <option key={index} value={element}>{element}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;