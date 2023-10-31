import { NavBar } from "@/Components";
import "@/styles/globals.css";
import Home from ".";

const App = ({ Component, pageProps }) => {
  <div>
    <NavBar />
    <Home />
    <h1>Huewf</h1>
    <Component {...pageProps} />
  </div>;
};
export default App;
