import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import SectionWrapper from "../components/SectionWrapper";

const EpisodesPages = () => {
  const data = useLoaderData();

  return (
    <SectionWrapper>
      <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">Episodios</h1>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(256px,_1fr))]  gap-6">
        {data.results !== undefined && data.results.map(element => {
          const { id, name, air_date, episode, url, created } = element;
          return (
            <Card
              key={id}
              url={url}
              title={name}
              subtitle={air_date}
              text1={episode}
              text2={created}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
}

export default EpisodesPages;