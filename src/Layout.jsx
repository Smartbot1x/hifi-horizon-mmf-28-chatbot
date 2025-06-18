import { Outlet } from "react-router";
import Footer from "./components/Footer";
import HeaderComponent from "./components/header";
import "./App.css";
/* import Spinner from "./Pages/Load"; */
import Chatbot from "./components/Chatbot";

function Layout() {
  return (
    <>
      <Chatbot />
      <HeaderComponent />

      <main>
        <Outlet />
        {/*  <Spinner /> */}
      </main>

      <footer className="">
        {" "}
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
