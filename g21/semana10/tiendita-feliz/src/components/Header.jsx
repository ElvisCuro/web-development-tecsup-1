import Filters from "./Filters";

const Header = ({ setFilters, categories }) => {
  return (
    <header className="py-4">
      <div className="container px-4 mx-auto flex flex-col gap-4">
        <h1 className='text-sky-600 text-3xl font-black text-center'>🛒 Tiendita Feliz 🛒</h1>
        <Filters
          setFilters={setFilters}
          categories={categories}
        />
      </div>
    </header>
  );
}

export default Header;