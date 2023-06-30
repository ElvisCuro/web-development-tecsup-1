const Categories = () => {
  const categories = [
    {
      title: 'Personajes',
      img: 'https://www.gamespot.com/a/uploads/screen_kubrick/171/1712892/3614168-total_rickall.jpg'
    },
    {
      title: 'Ubicaciones',
      img: 'https://overmental.com/wp-content/uploads/2015/10/rick-and-morty-calaxia.jpg'
    },
    {
      title: 'Episodios',
      img: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/rick-and-morty-best-episodes.jpg'
    },
  ];

  return (
    <section className="py-8">
      <div className="container p-2 mx-auto flex flex-col gap-6">
        <h2 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Categorías</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] place-items-center place-content-center gap-6">
          {categories.map((element, index) => {
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden w-full"
              >
                <img
                  src={element.img}
                  alt="Herrero de verano"
                  width={512}
                  height={512}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-black/50 p-4">
                  <h3 className="text-xl font-bold text-center">{element.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;