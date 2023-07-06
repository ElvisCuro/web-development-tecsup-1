import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";

const LocationsPage = () => {
  const data = useLoaderData();

  return (
    <SectionWrapper>
      <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Ubicaciones</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))] gap-6">
        {data.results !== undefined && data.results.map(element => {
          const { id, name, type, dimension, url, created } = element;
          return (
            <Card
              key={id}
              url={url}
              title={name}
              subtitle={type}
              text1={dimension}
              text2={created}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default LocationsPage;