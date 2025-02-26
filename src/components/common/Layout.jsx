import { Header } from "./Header";
import { Footer } from "./Footer";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-20" style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </>
  );
};

Layout.prototypes = {
  children: PropTypes.isRequired,
};
