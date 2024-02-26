import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import Footer from "./components/Footer.jsx"

const App = () => {
  return (
    <>
      <Navigation />

      <main className="py-3 pt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
