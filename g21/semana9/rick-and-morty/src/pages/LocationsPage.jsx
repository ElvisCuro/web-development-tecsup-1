import { Link, useLoaderData } from "react-router-dom";

const LocationsPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <section className="py-20">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Ubicaciones</h1>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6">
          {data.results !== undefined && data.results.map(element => {
            const { id, name, type, dimension, url, created } = element;
            return (
              <div
                key={id}
                className="rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="h-full p-4 bg-sky-900 flex flex-col gap-2">
                  <Link
                    to={url}
                  >
                    <h3 className="text-2xl font-bold">{name}</h3>
                  </Link>
                  <h4 className="text-base font-semibold">{type}</h4>
                  <h5 className="text-sm text-gray-400"><span className="font-bold">Dimensión:</span> {dimension}</h5>
                  <h5 className="text-sm text-gray-400"><span className="font-bold">Creado:</span> {created}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LocationsPage;