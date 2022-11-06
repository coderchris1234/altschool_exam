import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { Link, Outlet } from "react-router-dom";

const FrontPage = () => {

  return (
    <>
      <div className="mx-16">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default FrontPage;
