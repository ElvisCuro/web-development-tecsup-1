import { useLoaderData } from "react-router-dom";

const LocationsPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <h1 style={{ padding: '5rem' }}>Locaciones</h1>
  );
};

export default LocationsPage;