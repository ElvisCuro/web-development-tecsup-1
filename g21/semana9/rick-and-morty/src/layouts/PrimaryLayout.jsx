import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const PrimaryLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <main>
        {navigation.state === 'loading' && <h2 className="text-8xl text-center">Cargando</h2>}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;