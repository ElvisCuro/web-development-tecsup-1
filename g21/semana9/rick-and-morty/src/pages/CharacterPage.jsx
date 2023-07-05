import { Link, useLoaderData } from "react-router-dom";
import SectionWrapper from "../components/SectionWrapper";

const CharacterPage = () => {
  const data = useLoaderData();
  const { name, status, species, type, gender, origin, location, image, episode, created } = data;

  return (
    <SectionWrapper>
      <div>
        <h1 className="text-teal-500 font-extrabold text-3xl text-center transition-colors hover:text-amber-200">{name}</h1>
        <h2 className="text-lg font-semibold text-center">{status === 'Alive' ? '🟢' : '🔴'} {status} - {species} - {gender} {type ? `- ${type}` : ''} </h2>
      </div>
      <div className="max-w-5xl p-4 mx-auto rounded-2xl bg-sky-900 shadow-2xl shadow-teal-500 grid md:grid-cols-2 gap-6">
        <img
          src={image}
          alt={name}
          width={256}
          height={256}
          className="w-full h-64 object-cover rounded-2xl"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-base flex flex-col">
            <span className="font-bold">Origen:</span>
            {origin.name}
          </h3>
          <h3 className="text-base flex flex-col">
            <span className="font-bold">Ubicación:</span>
            {location.name}
          </h3>
          <h4 className="text-base flex flex-col">
            <span className="font-bold">Creado:</span>
            {created}
          </h4>
          <Link to={episode[0]} className="py-2 px-8 mt-auto rounded-2xl bg-teal-500 font-semibold self-start transition-colors hover:bg-amber-200 hover:text-sky-950">Primera aparición</Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default CharacterPage;