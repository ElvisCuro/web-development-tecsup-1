import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = ({ data }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const dataCategories = {
      characters: {
        title: 'Personajes',
        href: '/personajes',
        img: 'https://www.gamespot.com/a/uploads/screen_kubrick/171/1712892/3614168-total_rickall.jpg'
      },
      locations: {
        title: 'Ubicaciones',
        href: '/ubicaciones',
        img: 'https://overmental.com/wp-content/uploads/2015/10/rick-and-morty-calaxia.jpg'
      },
      episodes: {
        title: 'Episodios',
        href: '/episodios',
        img: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/rick-and-morty-best-episodes.jpg'
      }
    };

    for (const key in data) {
      setCategories((previousCategories) => [...previousCategories, dataCategories[key]]);
    }

    return (() => {
      setCategories([]);
    });
  }, [data]);

  return (
    <section className="py-8">
      <div className="container px-2 mx-auto flex flex-col gap-6">
        <h2 className="text-teal-500 font-extrabold text-4xl text-center transition-colors hover:text-amber-200">Categorías</h2>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] place-items-center place-content-center gap-6">
          {categories.map((element, index) => {
            const { title, href, img } = element;
            return (
              <Link
                key={index}
                to={href}
                className="rounded-2xl overflow-hidden w-full"
              >
                <img
                  src={img}
                  alt="Herrero de verano"
                  width={512}
                  height={512}
                  className="w-full h-64 object-cover"
                />
                <div className="bg-sky-900 p-4">
                  <h3 className="text-2xl font-bold text-center">{title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;

Categories.propTypes = {
  data: PropTypes.object
};